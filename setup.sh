#!/bin/bash

# Directorio de trabajo
WORKDIR="/opt/interconectados/front-interconectados-vite"

# Nombres de los archivos y directorios
DOCKER_COMPOSE_FILE="docker-compose.yml"
NGINX_CONF_FILE="nginx.conf"
NGINX_TEMP_CONF_FILE="nginx.temp.conf"
CERTBOT_DIR="certbot"
CERTBOT_CONF_DIR="$CERTBOT_DIR/conf"
CERTBOT_WWW_DIR="$CERTBOT_DIR/www"
NETWORK_NAME="nginx-proxy"

# Mensajes de salida
MSG_CREATED="Creado:"
MSG_EXISTS="Ya existe:"
MSG_STARTING="Iniciando Docker Compose..."
MSG_WAITING="Esperando 10 segundos para que los servicios se inicien..."
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

# Función para mostrar barra de progreso
progress_bar() {
    local duration=$1
    local increment=$((duration / 20))
    local count=0

    echo -ne '0% [--------------------] 100%\r'
    while [ $count -lt 20 ]; do
        sleep $increment
        count=$((count + 1))
        progress=$((count * 5))
        bar=$(printf "%-${count}s" "=")
        echo -ne "${progress}% [${bar// /=}>] $(($count * 5))%\r"
    done
    echo -ne '\n'
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
      - ./nginx.temp.conf:/etc/nginx/nginx.conf
      - certbot_conf:/etc/letsencrypt
      - certbot_www:/var/www/certbot
    networks:
      - nginx-proxy

  certbot:
    image: certbot/certbot
    volumes:
      - certbot_conf:/etc/letsencrypt
      - certbot_www:/var/www/certbot
    entrypoint: "/bin/sh -c 'trap exit TERM; while ! curl -s http://nginx/.well-known/acme-challenge/; do sleep 1; done; certbot certonly --webroot -w /var/www/certbot -m interconectados.sa@gmail.com --agree-tos --no-eff-email -d interconectados.duckdns.org --staging --force-renewal; while :; do certbot renew; sleep 12h & wait $${!}; done;'"
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

volumes:
  certbot_conf:
  certbot_www:

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

# Crear archivos de configuración temporales para Nginx
if [ ! -f "$NGINX_TEMP_CONF_FILE" ]; then
    echo "$MSG_CREATED $NGINX_TEMP_CONF_FILE"
    cat <<EOF > "$NGINX_TEMP_CONF_FILE"
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
            return 200 'nginx running';
        }
    }
}
EOF
else
    echo "$MSG_EXISTS $NGINX_TEMP_CONF_FILE"
fi

# Crear directorios de Certbot si no existen
create_dir_if_not_exists "$CERTBOT_DIR"
create_dir_if_not_exists "$CERTBOT_CONF_DIR"
create_dir_if_not_exists "$CERTBOT_WWW_DIR"

# Crear estructura de directorios para el desafío de Certbot
mkdir -p "$CERTBOT_WWW_DIR/.well-known/acme-challenge"
echo "test" > "$CERTBOT_WWW_DIR/.well-known/acme-challenge/test"

# Verificar y crear la red Docker si es necesario
check_and_create_network

# Iniciar Docker Compose con configuración temporal de Nginx
echo "$MSG_STARTING"
docker-compose up -d certbot nginx

# Esperar 10 segundos con barra de progreso
echo "$MSG_WAITING"
progress_bar 10

# Detener Nginx y Certbot
docker-compose down

# Cambiar la configuración de Nginx a la definitiva
mv ./nginx.temp.conf ./nginx.conf

# Iniciar todos los servicios de Docker Compose con la configuración definitiva
docker-compose up -d

# Verificar si todos los contenedores están en funcionamiento
if docker-compose ps | grep -q "Exit"; then
    echo "$MSG_FAILED"
    docker-compose logs  # Mostrar logs de los contenedores que fallaron
else
    echo "$MSG_DONE"
fi

echo "$MSG_GOODBYE"
