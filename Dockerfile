FROM node:alpine AS builder

COPY package*.json /app/

WORKDIR /app

RUN npm install --registry=https://registry.npm.taobao.org

COPY . /app

RUN npm run prod:dll

RUN npm run prod:build


FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /app/dist