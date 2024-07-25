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
NETWORK_NAME="nginx-proxy"  # Añade el nombre de la red que se utiliza en docker-compose.yml

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
cd "$WORKDIR" || { echo "No se pudo acceder al directorio $WORKDIR"; exit 1; }

# Crear archivos de configuración si no existen
if [ ! -f "$DOCKER_COMPOSE_FILE" ]; then
    echo "$MSG_CREATED $DOCKER_COMPOSE_FILE"
    cat <<EOF > "$DOCKER_COMPOSE_FILE"
# Contenido del archivo docker-compose.yml
EOF
else
    echo "$MSG_EXISTS $DOCKER_COMPOSE_FILE"
fi

# No sobrescribir nginx.conf si ya existe
if [ ! -f "$NGINX_CONF_FILE" ]; then
    echo "$MSG_CREATED $NGINX_CONF_FILE"
    cat <<EOF > "$NGINX_CONF_FILE"
# Contenido del archivo nginx.conf
EOF
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
        }

        location / {
            return 200 'Temporary Nginx Server';
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

# Verificar y crear la red Docker si es necesario
check_and_create_network

# Iniciar Docker Compose con la configuración temporal de Ngin
