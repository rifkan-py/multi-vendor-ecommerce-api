const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

async function connectDB() {
  try {
    const { connection } = await mongoose.connect(MONGO_URL);
    console.log(`mongodb atlas connected to ${connection.host}`);
  } catch (exception) {
    console.log(exception);
  }
}

module.exports = connectDB;
