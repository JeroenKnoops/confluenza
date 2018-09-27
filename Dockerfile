FROM node:10.10.0
WORKDIR /usr/confluenza
COPY yarn.lock package.json ./
RUN yarn
COPY . .
RUN yarn build && mv public /public
