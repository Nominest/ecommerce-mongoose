import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./config/mongooseconfig.js";
import ProductRouter from "./model/product.js";

const port = 4500;
const app = express();
app.use(cors());
app.use(express.json());
app.use(ProductRouter);
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

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
