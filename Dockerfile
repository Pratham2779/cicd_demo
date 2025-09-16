# Use Node.js lightweight image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Expose port 3000
EXPOSE 3000

# Run the Node.js server
CMD ["node", "server.js"]
