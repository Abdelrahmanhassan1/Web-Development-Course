const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (main_request, main_response) {
  main_response.sendFile(__dirname + "/index.html");
});

app.post("/", function (main_request_2, main_response_2) {
  const lat = Number(main_request_2.body.latitude);
  const lon = Number(main_request_2.body.longtude);
  // console.log(lat);
  // console.log(lon);

  const my_api_key = "07daa76f37a3532fbe9a5901c4072aea";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    my_api_key +
    "&units=metric";

  https.get(url, (response) => {
    console.log(response.statusCode);
    // const data = response.headers["content-type"];
    response.on("data", function (data) {
      //   this data will be Hexadecimal content
      // so we need to convert it to plain text
      // console.log(data);
      const weather_data = JSON.parse(data);
      //   console.log(weather_data);
      //   console.log(weather_data["coord"]);
      const temp = weather_data.main.temp;
      // const lat = weather_data.coord.lon;
      // const long = weather_data.coord.lat;
      const weather_description = weather_data.weather[0].description;
      const weather_icon = weather_data.weather[0].icon;
      // instead of just one send
      // main_response.send(weather_description);
      // we can use
      const icon_url =
        "http://openweathermap.org/img/wn/" + weather_icon + "@2x.png";

      main_response_2.write("<h1>Current Temperature: " + temp + " C</h1>");

      main_response_2.write(
        "<p>The Weather in Egypt: " + weather_description + "</p>"
      );
      main_response_2.write("<img src=" + icon_url + ">");

      main_response_2.send();
      // main_response_2.sendFile(__dirname + "/user_location_data.html");
    });
  });
  // response.send("Hello ");
  // console.log("Posted");
});

app.listen(3000, function () {
  console.log("Now I am Running");
});

//  const query = "Egypt";
//   const my_latitude = "30.504553";
//   const my_longtude = "31.011835";
