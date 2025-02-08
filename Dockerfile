# Use Node.js image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# # # Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# # # # Copy all frontend files
COPY . .

# # # Build React app
# RUN npm run build

# Expose frontend port
EXPOSE 80 443

# Start Express server
# CMD ["node", "server.js"]
CMD ["npm", "start"]