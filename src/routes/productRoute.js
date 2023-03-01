const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");
const ProductService = require("../services/ProductService");
const productRepository = require("../repositories/ProductRepository");

const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

router.get("/", productController.getAllProducts());

export default router;
