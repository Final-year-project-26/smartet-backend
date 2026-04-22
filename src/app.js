const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const paymentRoutes = require("./payment/payment.routes");

app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;