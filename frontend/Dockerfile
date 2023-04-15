FROM node:lts-slim

RUN apt-get update && \
    apt-get install -y curl && \
    npm install yarn

WORKDIR /front

COPY app/package.json ./
COPY app/yarn.lock ./
RUN yarn install

ENV CI=true

COPY . .
