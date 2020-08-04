FROM node:12
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package.lock.json are copied
# where avaiable (npm@5+)
COPY package*.json ./
RUN npm install
# If you are building you code for production
# RUN npm cli --only=production
# Build app source 
COPY . .

EXPOSE 3000

# USE CMD to run app
CMD ['nodemon', "app.js"]
