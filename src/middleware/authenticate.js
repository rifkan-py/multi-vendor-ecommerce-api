const jwt = require("jsonwebtoken");
const Plugin = require("../models/Plugin");

function authenticate(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.statusCode = 403;
      throw new Error("Authorization denied.");
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.auth = {
      id: decodedToken.id,
    };
    loadPlugins(decodedToken.id);
    next();
  } catch (exception) {
    console.log(exception);
    res.statusCode = exception.statusCode;
    throw new Error(exception.message);
  }
}

async function loadPlugins(id) {
  const allPlugins = await Plugin.find({ users: id });
  console.log(allPlugins);
}

module.exports = authenticate;
