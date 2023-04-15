FROM node:lts-slim

WORKDIR /front
COPY app/package.json ./
COPY app/yarn.lock ./
RUN yarn install

ENV CI=true

COPY . .
