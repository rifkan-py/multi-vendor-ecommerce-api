class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async createProduct(name, description, stock, images) {
    const product = await this.productRepository.create({
      name,
      description,
      stock,
      images,
    });

    return product;
  }

  async getAllProducts() {
    const allProducts = await this.productRepository.findAll();
    return allProducts;
  }
}

module.exports = ProductService;
