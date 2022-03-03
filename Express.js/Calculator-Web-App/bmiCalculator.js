const express = require("express");
// npm install body-parser
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

port = 3000;
// root directory

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (request, response) {
  // console.log(request.body);
  // this lets me know about the information being posted
  //   console.log(request.body.num1);
  var weight = Number(request.body.weight);
  var height = Number(request.body.height) / 100;
  var bmi = weight / (height * height);
  response.send("Your BMi is: " + bmi);
});

app.listen(port, function () {
  console.log("Now I am listening");
});
