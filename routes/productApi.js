import express from "express";
import Product from "../model/product.js";
import { Router } from "express";
import upload from "../util/multerhandler.js";

const ProductRouter = express.Router();

ProductRouter.post("product/add", upload.single("file"), (req, res) => {
  console.log(req);
});
// ProductRouter.post("/product/add", async (req, res) => {
//   const body = req.body;
//   const newProduct = new Product(body);
//   const result = await newProduct.save();

//   res.json({
//     data: result,
//   });
// });

// module.exports = Router;

export default ProductRouter;
