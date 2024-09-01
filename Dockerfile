# Stage 1: Build the application
FROM node:22.3.0-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create a minimal image to serve the app
FROM node:22.3.0-alpine

# Set working directory
WORKDIR /app

# Copy the built files from the build stage
COPY --from=build /app/dist /app

# Expose the port that your application will run on
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "preview"]
