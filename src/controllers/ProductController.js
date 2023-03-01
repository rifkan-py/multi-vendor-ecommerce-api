class ProductController {
  constructor(productService) {
    this.productService = productService;
    this.createProduct = this.createProduct.bind(this);
    this.login = this.login.bind(this);
  }
  async createProduct(req, res, next) {
    const { name, description, stock, images } = req.body;
    try {
      const product = await this.productService.createProduct(
        name,
        description,
        stock,
        images
      );

      return res.status(201).json(product);
    } catch (exception) {
      console.log(exception);
      return next(exception);
    }
  }

  async getAllProducts(req, res, next) {
    try {
      const products = await this.productService.getAllProducts();
      return res.status(200).json(products);
    } catch (exception) {
      console.log(exception);
      return next(exception);
    }
  }
}

module.exports = ProductController;
