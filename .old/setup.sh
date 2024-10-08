#!/bin/bash

echo "Iniciando el script setup.sh..."

# Directorio de trabajo
WORKDIR="/opt/interconectados/front-interconectados-vite"
echo "WORKDIR set to $WORKDIR"

# Nombres de los archivos y directorios
DOCKER_COMPOSE_FILE="docker-compose.yml"
NGINX_CONF_FILE="nginx.conf"
NGINX_TEMP_CONF_FILE="nginx.temp.conf"
CERTBOT_DIR="certbot"
CERTBOT_CONF_DIR="$CERTBOT_DIR/conf"
CERTBOT_WWW_DIR="$CERTBOT_DIR/www"
CHALLENGE_DIR="$CERTBOT_WWW_DIR/.well-known/acme-challenge"

# Mensajes de salida
MSG_CREATED="Creado:"
MSG_EXISTS="Ya existe:"
MSG_STARTING="Iniciando Docker Compose..."
MSG_WAITING="Esperando 10 segundos para que los servicios se inicien..."
MSG_RESTARTING="Reiniciando los servicios con configuración SSL..."
MSG_DONE="¡Listo! Los contenedores están en funcionamiento."
MSG_FAILED="Error: Algunos contenedores no se iniciaron correctamente. Revisa los logs para más detalles."
MSG_GOODBYE="Adiós, jefe."

# Función para crear directorios si no existen
create_dir_if_not_exists() {
    local dir="$1"
    if [ ! -d "$dir" ]; then
        echo "$MSG_CREATED $dir"
        mkdir -p "$dir"
        chmod -R 755 "$dir"
    else
        echo "$MSG_EXISTS $dir"
    fi
}

# Función para mostrar barra de progreso
show_progress() {
    local duration=$1
    local increment=$((duration / 100))
    local progress=0

    while [ $progress -le 100 ]; do
        echo -ne "Esperando ${duration} segundos para que los servicios se inicien...\r"
        echo -ne "["
        for ((i = 0; i < progress; i++)); do
            echo -ne "="
        done
        for ((i = progress; i < 100; i++)); do
            echo -ne " "
        done
        echo -ne "] $progress%"

        sleep $increment
        progress=$((progress + 1))
    done
    echo -e "\n"
}

# Cambiar al directorio de trabajo
echo "Cambiando al directorio de trabajo $WORKDIR"
cd "$WORKDIR" || { echo "No se pudo acceder al directorio $WORKDIR"; exit 1; }

# Crear archivos de configuración si no existen
if [ ! -f "$DOCKER_COMPOSE_FILE" ]; then
    echo "$MSG_CREATED $DOCKER_COMPOSE_FILE"
    cat <<EOF > "$DOCKER_COMPOSE_FILE"
version: '3'

services:
  app:
    image: front-interconectados-vite:latest
    container_name: front-interconectados-vite-app-1
    restart: always
    ports:
      - "3000:3000"
    networks:
      - interconectados_network

  nginx:
    image: nginx:latest
    container_name: front-interconectados-vite-nginx-1
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - front-interconectados-vite_certbot_www:/var/www/certbot
      - front-interconectados-vite_certbot_conf:/etc/letsencrypt
    networks:
      - interconectados_network

  certbot:
    image: front-interconectados-vite_certbot
    container_name: front-interconectados-vite-certbot-1
    entrypoint: /bin/sh -c "trap exit TERM; while :; do sleep 6h & wait \$${!}; certbot renew; done"
    volumes:
      - front-interconectados-vite_certbot_www:/var/www/certbot
      - front-interconectados-vite_certbot_conf:/etc/letsencrypt
    networks:
      - interconectados_network

  watchtower:
    image: containrrr/watchtower
    container_name: watchtower
    restart: always
    command: --interval 300 --cleanup --label-enable --include-restarting
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    networks:
      - interconectados_network

networks:
  interconectados_network:
    driver: bridge

volumes:
  front-interconectados-vite_certbot_www:
  front-interconectados-vite_certbot_conf:
EOF
    chmod 644 "$DOCKER_COMPOSE_FILE"
else
    echo "$MSG_EXISTS $DOCKER_COMPOSE_FILE"
fi

# Eliminar el directorio nginx.conf si existe
if [ -d "$NGINX_CONF_FILE" ]; then
    echo "Eliminando el directorio $NGINX_CONF_FILE para evitar conflictos..."
    rm -rf "$NGINX_CONF_FILE"
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
            autoindex on;  # Agregado para permitir el listado del directorio
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

        location / {
            proxy_pass http://front-interconectados-vite-app-1:3000;
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
    chmod 644 "$NGINX_CONF_FILE"
else
    echo "$MSG_EXISTS $NGINX_CONF_FILE"
fi

# Crear nginx.temp.conf
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
            autoindex on;  # Agregado para permitir el listado del directorio
        }

        location / {
            return 200 'Temporary Nginx Server';
        }
    }
}
EOF
    chmod 644 "$NGINX_TEMP_CONF_FILE"
else
    echo "$MSG_EXISTS $NGINX_TEMP_CONF_FILE"
fi

# Crear directorios de Certbot si no existen
create_dir_if_not_exists "$CERTBOT_DIR"
create_dir_if_not_exists "$CERTBOT_CONF_DIR"
create_dir_if_not_exists "$CERTBOT_WWW_DIR"
create_dir_if_not_exists "$CHALLENGE_DIR"

# Crear un archivo de prueba para la validación de Certbot
echo "test" > "$CHALLENGE_DIR/test.txt"
chmod 644 "$CHALLENGE_DIR/test.txt"

# Construir la imagen de certbot con curl
echo "Construyendo la imagen de certbot"
docker build -f Dockerfile.certbot -t front-interconectados-vite_certbot .

# Iniciar Docker Compose con la configuración temporal de Nginx
echo "$MSG_STARTING"
docker-compose up -d

# Esperar a que los servicios se inicien
echo "$MSG_WAITING"
show_progress 10

# Verificar archivos de desafío dentro del contenedor Nginx
docker exec front-interconectados-vite-nginx-1 sh -c 'mkdir -p /var/www/certbot/.well-known/acme-challenge'
docker cp "$CHALLENGE_DIR/test.txt" front-interconectados-vite-nginx-1:/var/www/certbot/.well-known/acme-challenge/test.txt

# Generar el certificado SSL en producción
echo "Generando el certificado SSL"
docker-compose run certbot certonly --webroot -w /var/www/certbot -m interconectados.sa@gmail.com --agree-tos --no-eff-email -d interconectados.duckdns.org --force-renewal

# Añadir tiempo de espera para asegurarse de que el certificado se genera correctamente
echo "Esperando 30 segundos para que Certbot complete la generación del certificado..."
show_progress 30

# Detener todos los contenedores
echo "Deteniendo todos los contenedores"
docker-compose down

# Cambiar la configuración de Nginx a la definitiva
echo "Actualizando nginx.conf"
mv "$NGINX_TEMP_CONF_FILE" "$NGINX_CONF_FILE"

# Reiniciar Docker Compose con la configuración definitiva de Nginx
echo "$MSG_RESTARTING"
docker-compose up -d

# Verificar si todos los contenedores están en funcionamiento
if docker-compose ps | grep -q "Exit"; then
    echo "$MSG_FAILED"
    docker-compose logs  # Mostrar logs de los contenedores que fallaron
else
    echo "$MSG_DONE"
fi

echo "$MSG_GOODBYE"
