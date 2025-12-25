FROM node:18-slim
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies (on the server, so you don't need package-lock)
RUN npm install --production

# Copy your server code
COPY index.js .

# Use the port Koyeb gives you
ENV PORT=8080
EXPOSE 8080

CMD [ "node", "index.js" ]
