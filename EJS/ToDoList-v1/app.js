const express = require("express");
const body_parser = require("body-parser");

const app = express();

const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello form server...");
});

app.listen(port || process.env.PORT, function () {
  console.log("Now I am Listening..");
});
