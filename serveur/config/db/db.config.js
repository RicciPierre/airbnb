const mongoose = require("mongoose");

// const mongoURI = process.env.MONGODB_URI;

const ConnectionMongoDb = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Pierre:${process.env.DB_PASSWORD}@cluster0.d6gf9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = ConnectionMongoDb;
