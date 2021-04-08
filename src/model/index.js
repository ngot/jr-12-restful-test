"use strict";

const mongoose = require("mongoose");
const UserModel = require("./User");

const mongodbServerHost = process.env.MONGO_HOST || '127.0.0.1';

mongoose.connect(`mongodb://${mongodbServerHost}:27017/jr-12`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  UserModel,
};
