# Use a hardened, minimal Node.js image
FROM node:18-alpine

# Set environment variable to opt-out of various tool telemetries
ENV DO_NOT_TRACK=1
ENV NODE_ENV=production

WORKDIR /app

# Install ONLY the gun package (no devDependencies)
RUN npm install gun --omit=dev

# Copy our clean server script
COPY index.js .

# Expose the Gun port
EXPOSE 8765

# Run the server
CMD ["node", "index.js"]
