const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.places = require("./places.model");

db.mongoose = mongoose;

module.exports = db;
