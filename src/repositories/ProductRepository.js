const Product = require("../models/Product");

class ProductRepository {
  async create(user) {
    const product = await Product.create(user);
    return product;
  }

  async findAll() {
    const products = await Product.find({});
    return products;
  }
}

module.exports = ProductRepository;
