# Usar una imagen base de Node.js optimizada para ARM64
FROM node:22.3.0-alpine

# Establecer el directorio de trabajo en la imagen de Docker
WORKDIR /app

# Copiar el package.json y el package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalar las dependencias sin intentar compilar manualmente esbuild
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto que usa Vite (por defecto 5173)
EXPOSE 5173

# Comando por defecto para iniciar la aplicación en modo producción
CMD ["npm", "run", "preview"]
