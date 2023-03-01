const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");
const ProductService = require("../services/ProductService");
const ProductRepository = require("../repositories/ProductRepository");

const productService = new ProductService(new ProductRepository());

const productController = new ProductController(productService);

router.get("/", productController.getAllProducts);
router.post("/", productController.createProduct);

module.exports = router;
