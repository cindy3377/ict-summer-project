const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const routes = require("./route");
const encrypt = require("./encrypt");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();

app.use(bodyParser.json());

app.use("/", routes);

app.listen(80, () => {
  console.log("Server started on port 80");
});
