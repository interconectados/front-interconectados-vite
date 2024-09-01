# Usar una imagen base de Node.js con la versión 22.3.0 específica para ARM64
FROM --platform=linux/arm64 node:22.3.0-alpine

# Instalar manualmente las dependencias para ARM64
RUN apk add --no-cache libc6-compat

# Establecer el directorio de trabajo en la imagen de Docker
WORKDIR /app

# Copiar el package.json y el package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalar las dependencias necesarias
RUN npm install --arch=arm64 --platform=linux --ignore-scripts

# Instalar esbuild manualmente para ARM64
RUN npm install esbuild-linux-arm64 --save-dev

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto que usa Vite
EXPOSE 5173

# Comando por defecto para iniciar la aplicación
CMD ["npm", "run", "preview"]
