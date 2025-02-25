FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
RUN npm list 
CMD ["node", "src/app.js"]

