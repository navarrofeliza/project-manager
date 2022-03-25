const mongoose = require("mongoose");

//Create all these fields for the form to gather data from. This will help with validation
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters"],
    },
    price: {
      type: Number,
      required: [true, "A price is required"],
      minlength: [0, " Must have a price!"],
    },
    description: {
      type: String,
      required: [true, "Please add an description of the item!"],
      minlength: [3, "Must be at least 3 characters long!"],
    },
  },
  { timestamps: true }
);

module.exports.Product = mongoose.model("Product", ProductSchema);
