const express = require("express");
const app = express();

// define a route for calculating discounts
app.get("/calculateDiscount", (req, res) => {
  // get the total order amount from the request
  const orderAmount = parseInt(req.query.amount);

  // apply discount logic
  let discount = 0;
  if (orderAmount >= 100) {
    discount = 0.1 * orderAmount;
  } else if (orderAmount >= 50) {
    discount = 0.05 * orderAmount;
  }

  // send the response with the calculated discount
  res.send(`Your discount is $${discount.toFixed(2)}.`);
});

// start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
