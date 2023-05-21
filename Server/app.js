import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors";
config({ path : "./config/config.env"});

export const app = express();

app.use(cors()); //cors is used for changing port current port is 4000 for frontend we use 3000 port
app.use(express.json());
app.use(express.urlencoded({extended:true }));
app.use("/api",paymentRoute); //config should be above this line

// app.get("/api/getkey", (req, res) => {
//   res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
//   res.header("Access-Control-Allow-Origin", "*"); // Set the desired origin or "*" for allowing all origins
// });
