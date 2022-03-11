const express = require("express");
const body_parser = require("body-parser");
const port = 3000;
const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  var today = new Date();
  var current_day = today.getUTCDay();
  console.log(today);
  var options_1 = {
    weekday: "long",
  };
  var options_2 = {
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options_1);
  var date = today.toLocaleDateString("en-US", options_2);
  res.render("list", { OurCurrentDay: day, CurrentDate: date });
});

app.listen(port || process.env.PORT, function () {
  console.log("Now I am Listening..");
});

// const week_days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// switch (current_day) {
//   case 0:
//     day = week_days[0];
//   case 1:
//     day = week_days[1];
//   case 2:
//     day = week_days[2];
//   case 3:
//     day = week_days[3];
//   case 4:
//     day = week_days[4];
//   case 5:
//     day = week_days[5];
//   case 6:
//     day = week_days[6];
// }
