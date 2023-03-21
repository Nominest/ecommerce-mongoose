import mongoose from "mongoose";

const db = mongoose.connect(
  "mongodb+srv://nomin:l0QKkEpF7kydejl4@ecom.dqhcq7a.mongodb.net/ecommerce?retryWrites=true&w=majority"
);

export default mongoose.connection;
