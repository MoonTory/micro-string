FROM node:10-alpine

WORKDIR /micro-string

RUN mkdir ./core
RUN mkdir ./common

COPY ./package.json .
COPY ./packages/core/package.json ./packages/core/
COPY ./packages/common/package.json ./packages/common/

RUN npm i -g yarn
RUN yarn install

COPY ./packages/core ./packages/core
COPY ./packages/core/prod.env ./packages/core/.env
COPY ./packages/common ./packages/common

WORKDIR /micro-string/packages/common

RUN yarn install
RUN yarn build

WORKDIR /micro-string/packages/core

RUN yarn install
RUN yarn build

EXPOSE 5002

CMD ["yarn", "start"]
