const mongoose = require("mongoose");

const Places = mongoose.model(
  "Places",
  new mongoose.Schema({
    img: String,
    location: String,
    title: String,
    description: String,
    price: Number,
    long: Number,
    lat: Number,
  })
);

module.exports = Places;
