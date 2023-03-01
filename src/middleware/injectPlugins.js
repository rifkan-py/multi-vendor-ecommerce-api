const path = require("path");
const fs = require("fs");

function injectPlugins(req, res, next) {
  console.log(req.auth);
  next();
}

module.exports = injectPlugins;
