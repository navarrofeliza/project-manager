const { Product } = require("../models/product.model");

// get all
module.exports.allProduct = (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json(err));
};

// get one
module.exports.oneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((oneProduct) => res.json(oneProduct))
    .catch((err) => res.status(400).json(err));
};

// create one
module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err));
};

// edit one
module.exports.editProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
};

// delete one
module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
};
