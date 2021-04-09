FROM node:slim

WORKDIR /app

ENV MONGO_HOST mongodb+srv://jr-test:<pwd>@cluster0.lm6cq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
ENV PORT 80

COPY package.json package.json
COPY src src
COPY test test

RUN npm i

ENTRYPOINT [ "node", "src/index.js" ]
