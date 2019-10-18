FROM node:10

RUN mkdir app
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY client client

COPY mock mock
COPY controllers controllers
COPY config.js .
COPY server.js .

CMD ["node", "server.js"]