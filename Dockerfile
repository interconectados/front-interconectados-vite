# Etapa 1: Construcción en x86_64
FROM node:22.3.0-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Creación de la imagen final para ARM64
FROM --platform=linux/arm64 node:22.3.0-alpine

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 5173

CMD ["npm", "run", "preview"]
