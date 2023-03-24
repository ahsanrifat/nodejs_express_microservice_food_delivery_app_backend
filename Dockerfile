FROM node:19.7

WORKDIR /src

COPY package*.json ./
COPY yarn* ./
COPY tsconfig.json ./

RUN yarn install

COPY . .
