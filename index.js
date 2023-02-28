import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/config/connectDB.js";
import errorHandler from "./src/middleware/errorHandler.js";
import userRoute from "./src/routes/userRoute.js";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use("/api/v1/user", userRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
