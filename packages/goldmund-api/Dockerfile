FROM node:13-alpine
RUN mkdir -p /usr/src/app/logs
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY . .
CMD ["npm","run","start"]
