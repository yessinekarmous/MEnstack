const {Product}=require("../models/Product.model")

module.exports.CreateProduct=(req,res)=>{
    Product.create(req.body)
    .then((CreatedOne)=>{
        res.status(200).json({CreatedOne})
    })
    .catch((err)=> res.status(400).json({message:"Something went wrong📛📛📛",err}))
}                  