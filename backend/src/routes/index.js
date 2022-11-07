import express from "express";
import productRoutes from "./productRoutes"
import userRoutes from "./userRoutes"
import salesRoutes from "./salesRoutes"
import purchaseRoutes from "./purchaseRoutes"

const app = express();
app.use("/user",userRoutes)
app.use("/product",productRoutes)
app.use("/purchase",purchaseRoutes)
app.use("/sales",salesRoutes)

export default app;