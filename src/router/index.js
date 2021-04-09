"use strict";

const Router = require("koa-router");
const router = new Router();

router.get("/health", (ctx) => {
  ctx.body = "succeed";
});

require("./user")(router);
module.exports = router;
