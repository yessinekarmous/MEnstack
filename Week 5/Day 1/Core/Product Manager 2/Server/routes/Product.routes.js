const ProductControllers = require("../controllers/Product.controllers");

module.exports = (app) => {
  app.post("/api/CreateProduct", ProductControllers.CreateProduct);
  app.get("/api/FindOne/:id", ProductControllers.FindOne);
  app.get("/api/FindAll", ProductControllers.FindAll);
};
