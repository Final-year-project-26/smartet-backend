const paymentService = require("./payment.service");

exports.pay = async (req, res) => {
  try {
    const response = await paymentService.initializePayment(req.body);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.verify = async (req, res) => {
  try {
    const data = await paymentService.verifyPayment(req.params.tx_ref);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};