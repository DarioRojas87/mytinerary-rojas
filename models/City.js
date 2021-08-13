const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
});

const City = mongoose.model("city", citySchema);

module.exports = City;
