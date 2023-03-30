import mongoose from "mongoose";
require('dotenv').config()

const db = mongoose.connect(
process.env.REACT_APP_API_KEY
);

export default mongoose.connection;
