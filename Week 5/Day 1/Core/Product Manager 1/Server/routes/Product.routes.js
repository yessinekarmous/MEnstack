const ProductControllers=require("../controllers/Product.controllers")


module.exports=(app)=>{
    app.post("/api/CreateProduct",ProductControllers.CreateProduct)
}