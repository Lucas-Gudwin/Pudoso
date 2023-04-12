FROM node:14

# Create app directory
WORKDIR /home/gudwin/

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY Delivery1.js /home/gudwin/

# Expose the port the app runs on
EXPOSE 2020

# Run the app
CMD [ "node", "Delivery1.js"]
