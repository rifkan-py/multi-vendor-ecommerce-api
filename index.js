const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./src/config/connectDB");
const errorHandler = require("./src/middleware/errorHandler");
const userRoute = require("./src/routes/userRoute");
const productRoute = require("./src/routes/productRoute");

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use("/api/v1/user", userRoute);
app.use("/api/v1/products", productRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
