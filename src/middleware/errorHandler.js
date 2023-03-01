/* eslint-disable no-unused-vars */
function errorHandler(error, req, res, _next) {
  console.error(error.stack);

  const status = error.statusCode || 500;
  const message = error.message || "Something went wrong";

  res.status(status).json({
    status,
    message,
    stack: process.env.NODE_ENV === "development" ? error.stack : null,
  });
}

module.exports = errorHandler;
