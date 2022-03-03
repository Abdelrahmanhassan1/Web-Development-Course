const express = require("express");
// npm install body-parser
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

port = 3000;
// root directory

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
  //   console.log(__dirname + "/index.html");
});

app.post("/", function (request, response) {
  // console.log(request.body);
  // this lets me know about the information being posted
  //   console.log(request.body.num1);
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var result = num1 + num2;
  response.send("The result: " + result);
});

app.listen(port, function () {
  console.log("Now I am listening");
});
