# Use the official Node.js 14 image as a base
FROM node:14 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as the base image for serving the static files
FROM nginx:alpine

# Copy the built React app from the previous stage to the Nginx image
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
