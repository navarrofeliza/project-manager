const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
  app.get("/api/product", ProductController.allProduct);
  app.get("/api/product/:id", ProductController.oneProduct);
  app.post("/api/product/new", ProductController.createProduct);
  app.put("/api/product/:id", ProductController.editProduct);
  app.delete("/api/product/:id", ProductController.deleteProduct);
};
