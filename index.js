import express from "express";
// import bodyParser from "body-parser";
import cors from "cors";
// import db from "./config/mongooseconfig.js";
import productRouter from "./routes/productApi.js";

const app = express();
const port = 4500;

app.use(cors());
app.use(express.json());
app.use(productRouter);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
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
