const express = require("express");
const res = require("express/lib/response");

const https = require("https");

const app = express();

app.get("/", function (main_request, main_response) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=30.504553&lon=31.011835&appid=07daa76f37a3532fbe9a5901c4072aea&units=imperial";
  https.get(url, (response) => {
    console.log(response.statusCode);
    // const data = response.headers["content-type"];
    response.on("data", function (data) {
      //   this data will be Hexadecimal content
      // so we need to convert it to plain text
      //   console.log(data);
      const weather_data = JSON.parse(data);
      //   console.log(weather_data);
      //   console.log(weather_data["coord"]);
      const temp = weather_data.main.temp;
      const lat = weather_data.coord.lon;
      const long = weather_data.coord.lat;
      const weather_description = weather_data.weather[0].description;
      const weather_icon = weather_data.weather[0].icon;
      // instead of just one send
      // main_response.send(weather_description);
      // we can use
      const icon_url =
        "http://openweathermap.org/img/wn/" + weather_icon + "@2x.png";
      main_response.write("<h1>Current Temperature: " + temp + " F</h1>");

      main_response.write(
        "<p>The Weather in Egypt: " + weather_description + "</p>"
      );
      main_response.write("<img src=" + icon_url + ">");

      main_response.send();
    });
  });
  // response.send("Hello ");
});

app.listen(3000, function () {
  console.log("Now I am Running");
});
