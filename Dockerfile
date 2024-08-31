# Etapa 1: Construcción y Servir con Vite
FROM node:18-alpine

# Añadir un argumento de construcción para el timestamp
ARG BUILD_DATE
LABEL build_date=$BUILD_DATE

# Establecer el directorio de trabajo en la imagen de Docker
WORKDIR /app

# Copiar los archivos package.json y package-lock.json para instalar dependencias
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm install

# Añadir un archivo temporal para forzar un cambio en la imagen
RUN echo $BUILD_DATE > /app/build_date.txt

# Copiar el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto que usa Vite (por defecto es el 5173)
EXPOSE 5173

# Comando por defecto para iniciar la aplicación con Vite en modo de desarrollo o producción
CMD ["npm", "run", "dev"]  # o ["npm", "run", "build"] seguido de ["npm", "run", "preview"] para producción
