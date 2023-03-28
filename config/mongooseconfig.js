import mongoose from "mongoose";

const db = mongoose.connect(
  "mongodb+srv://nomin:jqMgqQRYPjrQwnRd@cluster0.pthyhxo.mongodb.net/ecommerce?retryWrites=true&w=majority"
);

export default mongoose.connection;
