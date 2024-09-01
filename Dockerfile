# Usar una imagen base de Node.js con la versión 22.3.0 y plataforma ARM64
FROM node:22.3.0-alpine

# Establecer el directorio de trabajo en la imagen de Docker
WORKDIR /app

# Copiar el package.json y el package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalar las dependencias sin compilar esbuild manualmente
RUN npm install --arch=arm64 --platform=linux --ignore-scripts

# Si esbuild es requerido, forzamos el uso de una versión precompilada
RUN npm install esbuild-linux-arm64

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto que usa Vite
EXPOSE 5173

# Comando por defecto para iniciar la aplicación
CMD ["npm", "run", "preview"]
