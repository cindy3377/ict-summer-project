const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  userID: Number,
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
