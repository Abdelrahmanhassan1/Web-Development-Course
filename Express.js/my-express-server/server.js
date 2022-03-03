// Commands to run:
// npm init
// npm install express

const express = require("express");
var app = express();

// here we are targeting the home page
app.get("/", function (request, response) {
  //   console.log(request);
  //  // you can see all this information when you run node server.js command in the terminal
  //   response.send("Hello");
  // // every time you want to see the change effect you run the command again
  response.send("<h1>Hello World</h1>");
});

// here we are targeting the contact page
app.get("/contact", function (request, response) {
  response.send("<p>Hello this is a contact page</p>");
});

// here we are targeting the about page
app.get("/about", function (request, response) {
  response.send("<p>Hi, I am Abdelrahman Hassan. A Web Developer.</p>");
});

// Then we can install nodemon --> npm install -g nodemon
// this will help iterate every change regularly wihtout need to stop and run node command again
app.get("/hobbies", function (request, response) {
  response.send(
    "<h1>My Hobbies:</h1><ul><li>Software</li><li>Running</li></ul>"
  );
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
