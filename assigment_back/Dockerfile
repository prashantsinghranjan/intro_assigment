FROM alpine:3.18
Env NODE_VERSION 20.11.1

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node","index.js" ]