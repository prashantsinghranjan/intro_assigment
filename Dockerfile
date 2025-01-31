FROM node:20.11.1-alpine

WORKDIR /app

COPY ./package*.json ./

RUN apk update && apk add npm

#RUN npm install -g npm@11.1.0

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","start" ]