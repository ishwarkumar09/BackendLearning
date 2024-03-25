//required ('dotenv').config({path: '.env'})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import dotenv from "dotenv"
import  connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB();











//first approch
/*import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Errrr", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log("Server is started");
    });
  } catch (error) {
    console.error("Error:", error);
  }
})();
*/
