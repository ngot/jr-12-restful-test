"use strict";

const { userCtl } = require("../controller/");
const { objectIdValidation } = require("../middleware/");

module.exports = (router) => {
  // single user
  router.get("/user/:id", objectIdValidation, userCtl.getUser);
  router.post("/user", userCtl.createUser);
  router.put("/user/:id", objectIdValidation, userCtl.updateUser);
  router.delete("/user/:id", objectIdValidation, userCtl.deleteUser);
  // Batch user
  router.get("/batch/user", userCtl.batchGetUser);
  router.post("/batch/user", userCtl.batchCreateUser);
  router.put("/batch/user/:ids", userCtl.batchUpdateUser);
  router.delete("/batch/user/:ids", userCtl.batchDeleteUser);
  // list
  router.get("/user", userCtl.listUser);
};
