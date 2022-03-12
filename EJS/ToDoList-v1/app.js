const express = require("express");

const body_parser = require("body-parser");

const port = 3000;

const app = express();

var new_tasks = [];
var work_tasks = [];
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use(body_parser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var today = new Date();

  var current_day = today.getUTCDay();
  // console.log(today);

  var options_1 = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options_1);

  res.render("list", {
    ListTitle: day,
    tasksAdded: new_tasks,
  });
});

app.post("/", function (req, res) {
  var new_task = req.body.new_value;

  // console.log(new_task);
  
  // this code can't be written in post request! okay move it to the get request and redirect from here
  // res.render("list", { taskAdded: new_task });
  if (new_task !== "") {
    if(req.body.list === "Work"){
      work_tasks.push(new_task);
      res.redirect("/work");
  
    }else{
      new_tasks.push(new_task);
      res.redirect("/");
    }
  }
  
});

app.get("/work", function (req, res) {
  res.render("list", { ListTitle: "Work List", tasksAdded: work_tasks });
});

app.get("/about", function (req, res) {
  res.render("about");
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
