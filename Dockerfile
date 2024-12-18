FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .
COPY .env .env

RUN npm run build

EXPOSE 3000

CMD ["node", "build"]
