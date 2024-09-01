# Stage 1: Build the application
FROM arm64v8/node:22.3.0-buster-slim AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN apt-get update && apt-get install -y libstdc++6 && npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create a minimal image to serve the app
FROM arm64v8/node:22.3.0-buster-slim

# Set working directory
WORKDIR /app

# Copy the built files from the build stage
COPY --from=build /app/dist /app

# Expose the port that your application will run on
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "preview"]
