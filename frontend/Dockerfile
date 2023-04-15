FROM node:lts-slim

WORKDIR /front
RUN npm install -g yarn
# COPY app/package.json ./
# COPY app/yarn.lock ./
# RUN yarn install

ENV CI=true

COPY . .
