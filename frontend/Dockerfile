FROM node:lts-slim

WORKDIR /front

RUN apt-get update && \
    apt-get install -y curl && \
    npm install yarn

COPY app/package.json ./
COPY app/yarn.lock ./
RUN yarn install

ENV CI=true

COPY . .
