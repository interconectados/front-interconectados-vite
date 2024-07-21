# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install Git and configure with GitHub token
RUN apk add --no-cache git && \
    git config --global credential.helper '!f() { echo "username=x-access-token"; echo "password=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"; }; f' && \
    git clone https://github.com/interconectados/front-interconectados-vite.git .

# Install dependencies
RUN npm install

# Expose the port Vite will use (default is 3000)
EXPOSE 3000

# Iniciar el servidor Vite con --host 0.0.0.0 para que sea accesible desde cualquier IP
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]