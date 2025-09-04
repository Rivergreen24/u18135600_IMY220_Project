FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build frontend for production
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the server
CMD ["npm", "run", "start"]