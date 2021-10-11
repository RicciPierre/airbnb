const express = require("express");
const app = express();
const port = 1337;
var cors = require("cors");
var bodyParser = require("body-parser");
require("dotenv").config();
const ConnectionMongoDb = require("./config/db/db.config");
const db = require("./models");
const Places = db.places;

app.use(cors());
app.use(bodyParser.json());

ConnectionMongoDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/send", (req, res) => {
  console.log(req.body);

  const places = new Places({
    img: req.body.img,
    location: req.body.location,
    title: req.body.title,
    description: req.body.descripiton,
    star: req.body.star,
    price: req.body.price,
    long: req.body.long,
    lat: req.body.lat,
  });

  places.save();

  return res.status(200).json({
    data: req.body,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
