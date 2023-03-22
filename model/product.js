import mongoose from "mongoose";
import "../config/mongooseconfig.js";

const ProductSchema = new mongoose.Schema(
  {
    // id: ObjectID,
    description: String,
    spec: String,
    name: String,
    image: String,
    price: Number,
    stock: Number,
    sale: Number,
    category: String,
  },
  {
    collection: "products",
  }
);

const Product = mongoose.model("Product", ProductSchema, "products");

export default Product;
