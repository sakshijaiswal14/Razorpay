import { app } from "./app.js";
import Razorpay from "razorpay" ;

export const instance = new Razorpay({
    key_id: process.env.Razorpay_API_KEY,
    key_secret: process.env.Razorpay_API_SECRET,
});

app.listen(process.env.PORT, () =>
  console.log(`Server is working on ${process.env.PORT}`)
);