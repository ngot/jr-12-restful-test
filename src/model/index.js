"use strict";

const mongoose = require("mongoose");
const UserModel = require("./User");

const mongodbServerHost = process.env.MONGO_HOST || 'mongodb://127.0.0.1:27017/jr-12';

mongoose.connect(mongodbServerHost, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  UserModel,
};
