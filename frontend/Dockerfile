FROM node:lts-slim

WORKDIR /front
COPY app/package.json ./
COPY app/package-lock.json ./
RUN npm install

ENV CI=true
