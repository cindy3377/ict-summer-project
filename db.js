// require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { modelName } = require("./user");
const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/webdb", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
