#!/bin/bash

# Directorio de trabajo
WORKDIR="/opt/interconectados/front-interconectados-vite"

# Nombres de los archivos y directorios
DOCKER_COMPOSE_FILE="docker-compose.yml"
NGINX_CONF_FILE="nginx.conf"
CERTBOT_DIR="certbot"
CERTBOT_CONF_DIR="$CERTBOT_DIR/conf"
CERTBOT_WWW_DIR="$CERTBOT_DIR/www"
NETWORK_NAME="nginx-proxy"

# Mensajes de salida
MSG_CREATED="Creado:"
MSG_EXISTS="Ya existe:"
MSG_STARTING="Iniciando Docker Compose..."
MSG_DONE="¡Listo! Los contenedores están en funcionamiento."
MSG_FAILED="Error: Algunos contenedores no se iniciaron correctamente. Revisa los logs para más detalles."
MSG_GOODBYE="Adiós, jefe."

# Función para crear directorios si no existen
create_dir_if_not_exists() {
    local dir="$1"
    if [ ! -d "$dir" ]; then
        echo "$MSG_CREATED $dir"
        mkdir -p "$dir"
    else
        echo "$MSG_EXISTS $dir"
    fi
}

# Función para verificar y crear la red de Docker si no existe
check_and_create_network() {
    if ! docker network ls | grep -q $NETWORK_NAME; then
        echo "$MSG_CREATED red Docker '$NETWORK_NAME'"
        docker network create $NETWORK_NAME
    else
        echo "$MSG_EXISTS red Docker '$NETWORK_NAME'"
    fi
}

# Cambiar al directorio de trabajo
cd "$WORKDIR" || { echo "No se pudo acceder al directorio $WORKDIR"; exit 1; }

# Crear archivos de configuración si no existen
if [ ! -f "$DOCKER_COMPOSE_FILE" ]; then
    echo "$MSG_CREATED $DOCKER_COMPOSE_FILE"
    cat <<EOF > "$DOCKER_COMPOSE_FILE"
version: '3'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    image: front-interconectados-vite:latest
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    networks:
      - nginx-proxy

  nginx:
    image: nginx:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./certbot/conf:/etc/letsencrypt
      - ./certbot/www:/var/www/certbot
    depends_on:
      - app
      - certbot
    networks:
      - nginx-proxy

  certbot:
    image: certbot/certbot
    volumes:
      - ./certbot/conf:/etc/letsencrypt
      - ./certbot/www:/var/www/certbot
    entrypoint: "/bin/sh -c 'trap exit TERM; certbot certonly --webroot -w /var/www/certbot -m interconectados.sa@gmail.com --agree-tos --no-eff-email -d interconectados.duckdns.org --force-renewal; while :; do certbot renew; sleep 12h & wait $${!}; done;'"
    networks:
      - nginx-proxy

  watchtower:
    image: containrrr/watchtower
    container_name: watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - WATCHTOWER_CLEANUP=true
      - WATCHTOWER_POLL_INTERVAL=30
    networks:
      - default

networks:
  nginx-proxy:
    name: nginx-proxy
    external: true
  default:
    external: false
EOF
else
    echo "$MSG_EXISTS $DOCKER_COMPOSE_FILE"
fi

# No sobrescribir nginx.conf si ya existe
if [ ! -f "$NGINX_CONF_FILE" ]; then
    echo "$MSG_CREATED $NGINX_CONF_FILE"
    cat <<EOF > "$NGINX_CONF_FILE"
events {
    worker_connections 1024;
}

http {
    server {
        listen 80;
        server_name interconectados.duckdns.org;

        location /.well-known/acme-challenge/ {
            root /var/www/certbot;
        }

        location / {
            return 301 https://\$host\$request_uri;
        }
    }

    server {
        listen 443 ssl;
        server_name interconectados.duckdns.org;

        ssl_certificate /etc/letsencrypt/live/interconectados.duckdns.org/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/interconectados.duckdns.org/privkey.pem;

        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_prefer_server_ciphers on;
        ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256";

        location / {
            proxy_pass http://172.18.0.2:5173;
            proxy_set_header Host \$host;
            proxy_set_header X-Real-IP \$remote_addr;
            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto \$scheme;
        }

        location /.well-known/acme-challenge/ {
            root /var/www/certbot;
        }
    }
}
EOF
else
    echo "$MSG_EXISTS $NGINX_CONF_FILE"
fi

# Crear directorios de Certbot si no existen
create_dir_if_not_exists "$CERTBOT_DIR"
create_dir_if_not_exists "$CERTBOT_CONF_DIR"
create_dir_if_not_exists "$CERTBOT_WWW_DIR"

# Verificar y crear la red Docker si es necesario
check_and_create_network

# Iniciar Docker Compose
echo "$MSG_STARTING"
docker-compose up -d

# Verificar si todos los contenedores están en funcionamiento
if docker-compose ps | grep -q "Exit"; then
    echo "$MSG_FAILED"
    docker-compose logs  # Mostrar logs de los contenedores que fallaron
else
    echo "$MSG_DONE"
fi

echo "$MSG_GOODBYE"
