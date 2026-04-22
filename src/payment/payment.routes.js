const express = require("express");
const router = express.Router();
const controller = require("./payment.controller");

router.post("/pay", controller.pay);
router.get("/verify/:tx_ref", controller.verify);

module.exports = router;