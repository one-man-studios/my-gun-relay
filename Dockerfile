# Use a lightweight Node.js image
FROM node:18-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package files first (to cache layers)
COPY package*.json ./

# Install dependencies directly on the server
RUN npm install --production

# Copy the rest of your code (index.js, etc.)
COPY . .

# Use the port Koyeb provides
ENV PORT=8080
EXPOSE 8080

# Start the server
CMD [ "node", "index.js" ]
