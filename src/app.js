"use strict";

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const router = require("./router/");

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());

module.exports = app;
