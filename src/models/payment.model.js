const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  tx_ref: String,
  amount: Number,
  currency: { type: String, default: "ETB" },
  email: String,
  status: { type: String, default: "pending" },
}, { timestamps: true });

module.exports = mongoose.model("Payment", paymentSchema);