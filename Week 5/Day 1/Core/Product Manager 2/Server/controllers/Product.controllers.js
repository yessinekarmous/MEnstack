const { Product } = require("../models/Product.model");

module.exports.CreateProduct = (req, res) => {
  Product.create(req.body)
    .then((CreatedOne) => {
      res.status(200).json({ CreatedOne });
    })
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong📛📛📛", err })
    );
};
module.exports.FindOne = (req, res) => {
  const { params } = req;
  Product.findOne({ _id: params.id })
    .then((OneProduct) => {
      res.status(200).json({ OneProduct });
    })
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong📛📛📛", err })
    );
};
module.exports.FindAll = (req, res) => {
  Product.find()
    .then((AllProducts) => {
      res.status(200).json({ AllProducts });
    })
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong📛📛📛", err })
    );
};
