# Stage 1: Build the application
FROM node:18-bullseye-slim AS build

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
FROM node:18-bullseye-slim

# Set working directory
WORKDIR /app

# Copy the package.json and node_modules from the build stage
COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Expose the port that your application will run on
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "preview", "--", "--host"]
