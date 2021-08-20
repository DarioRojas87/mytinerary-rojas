const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: Object, required: true },
  price: { type: Number, required: true, min: 1, max: 5 },
  duration: { type: Number, required: true },
  likes: { type: Number, default: 0 },
  hashtags: { type: Array, required: true },
  cardPhoto: { type: String, required: true },
  comments: { type: Array },
});
const Itinerary = mongoose.model("itinerary", itinerarySchema);

module.exports = Itinerary;
