#!/bin/bash

# Directorio de trabajo
WORKDIR="/opt/interconectados/front-interconectados-vite"

# Nombres de los archivos y directorios
DOCKER_COMPOSE_FILE="docker-compose.yml"
NGINX_CONF_FILE="nginx.conf"
CERTBOT_DIR="certbot"
CERTBOT_CONF_DIR="$CERTBOT_DIR/conf"
CERTBOT_WWW_DIR="$CERTBOT_DIR/www"

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

# Cambiar al directorio de trabajo
cd "$WORKDIR" || { echo "No se pudo acceder al directorio $WORKDIR"; exit 1; }

# Crear archivos de configuración si no existen
if [ ! -f "$DOCKER_COMPOSE_FILE" ]; then
    echo "$MSG_CREATED $DOCKER_COMPOSE_FILE"
    cat <<EOF > "$DOCKER_COMPOSE_FILE"
# ... (Contenido del archivo docker-compose.yml)
EOF
else
    echo "$MSG_EXISTS $DOCKER_COMPOSE_FILE"
fi

# No sobrescribir nginx.conf si ya existe
if [ ! -f "$NGINX_CONF_FILE" ]; then
    echo "$MSG_CREATED $NGINX_CONF_FILE"
    cat <<EOF > "$NGINX_CONF_FILE"
# ... (Contenido del archivo nginx.conf)
EOF
else
    echo "$MSG_EXISTS $NGINX_CONF_FILE"
fi

# Crear directorios de Certbot si no existen
create_dir_if_not_exists "$CERTBOT_DIR"
create_dir_if_not_exists "$CERTBOT_CONF_DIR"
create_dir_if_not_exists "$CERTBOT_WWW_DIR"

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
