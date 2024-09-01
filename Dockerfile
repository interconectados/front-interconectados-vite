# Usar una imagen base de Node.js con la versión 22.3.0, especificando la plataforma ARM64
FROM --platform=linux/arm64 node:22.3.0-alpine

# Deshabilitar QEMU emulation
ENV DOCKER_CLI_EXPERIMENTAL=enabled
ENV QEMU_EXECVE=0

# Establecer el directorio de trabajo en la imagen de Docker
WORKDIR /app

# Copiar el package.json y el package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalar esbuild para ARM64
RUN npm install esbuild --platform=linux/arm64 --force

# Instalar las dependencias (omitidas las de desarrollo)
RUN npm install --omit=dev

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto que usa Vite
EXPOSE 5173

# Comando por defecto para iniciar la aplicación
CMD ["npm", "run", "preview"]
