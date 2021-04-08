FROM node

WORKDIR /app

COPY package.json package.json
COPY src src
COPY test test

RUN npm i

ENTRYPOINT [ "node", "src/index.js" ]
