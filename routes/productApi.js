import express from "express";
import Product from "../model/product.js";
import upload from "../util/multerhandler.js";
import uploadCloud from "../config/cloudinary-config.js";

const productRouter = express.Router();

productRouter.post("/addproduct", upload.single("file"), async (req, res) => {
  const { secure_url } = await uploadCloud.uploader.upload(req.file.path, {
    folder: "product",
  });
  const newProduct = {
    image: secure_url,
    ...JSON.parse(req.body.details),
  };
  console.log("NEW PRODUCT:", newProduct);
});

productRouter.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
    console.log("products get:", products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

productRouter.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    await product.remove();
    res.json({ msg: "Product removed" });
    console.log("product delete:", product);
  } catch (error) {
    console.error(error.message);

    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(500).send("Server error");
  }
});

export default productRouter;
// const productRouter = express.Router();

// productRouter.get("/", async (req, res) => {
//   await Product.find({}).then((res) => {
//     console.log("products", res);
//   });
// });

// db.once("open", () => {
//   Product.find({}).then((products) => {
//     console.log("products:", products);
//   });
// });

// db.on("error", (error) => {
//   console.log("error", error);
// });

// ProductRouter.post("/product/add", async (req, res) => {
//   const body = req.body;
//   const newProduct = new Product(body);
//   const result = await newProduct.save();

//   res.json({
//     data: result,
//   });
// });

// module.exports = Router;
