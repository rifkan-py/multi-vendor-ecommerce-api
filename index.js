const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./src/config/connectDB");
const errorHandler = require("./src/middleware/errorHandler");
const userRoute = require("./src/routes/userRoute");

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

function loadEnabledPlugins() {
  fs.readFile(path.join(__dirname, "plugins.json"), "utf-8", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      for (let key of Object.keys(JSON.parse(data))) {
        console.log(key);
      }
    }
  });
}

loadEnabledPlugins();

app.use("/api/v1/user", userRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
