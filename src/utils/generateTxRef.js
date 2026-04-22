const { v4: uuidv4 } = require("uuid");

const generateTxRef = () => {
  return "tx-" + uuidv4();
};

module.exports = generateTxRef;