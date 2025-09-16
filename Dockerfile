# Use Node.js lightweight image
FROM node:20-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./
RUN npm install

# Copy remaining project files
COPY . .

EXPOSE 3000
CMD ["node", "server.js"]
