import dotenv from "dotenv";
import mongoose from "mongoose";
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

export default connectDB;
