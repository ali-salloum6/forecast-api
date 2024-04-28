const express = require("express");
const axios = require("axios");
const utils = require("./utils");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/forecast", async (req, res) => {
  try {
    const { lat, lon } = req.query;
    let response;
    if (!lat || !lon) {
      response = await axios.get(
        "https://www.yr.no/api/v0/locations/2-524901/forecast",
      );
    } else {
      response = await axios.get(
        `https://www.yr.no/api/v0/locations/${lat}%2C${lon}/forecast`,
      );
    }
    const data = response.data;
    const intervals = [...data.shortIntervals, ...data.longIntervals];

    const temperatures = utils.getTemperaturesAround14h(intervals);

    const reducedTemperatures = utils.reduceTemperaturesByDate(temperatures);

    console.log("/forecast was called. Returned the forecast successfully");
    res.status(200).json(reducedTemperatures);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error fetching temperature forecast" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
