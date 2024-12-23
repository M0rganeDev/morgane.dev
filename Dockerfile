FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --force

COPY . .
COPY .env .env

RUN npm run build

RUN cp server.js /app/build/

EXPOSE 3000

ENV ORIGIN http://localhost:3000

CMD ["node", "build/server.js"]
