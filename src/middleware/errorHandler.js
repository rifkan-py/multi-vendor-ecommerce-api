/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, _next) {
  console.error(err.stack);

  res.status(500).json({
    message: "Something went wrong",
  });
}

module.exports = errorHandler;
