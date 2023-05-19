const mongoose = require("mongoose");
const mongodb = require("mongodb").MongoClient;

async function connectToMongo() {
  try {
    await mongoose.connect(
      "mongodb+srv://sheraz:555@cluster0.goeavxv.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
}

module.exports = connectToMongo;
