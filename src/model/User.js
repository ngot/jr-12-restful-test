"use strict";

const mongoose = require("mongoose");

const Schema = {
  name: String,
  age: Number,
};

module.exports = mongoose.model("User", Schema);
