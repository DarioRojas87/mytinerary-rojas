const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  author: {
    name: { type: String, required: true },
    photo: { type: String, required: true },
  },
  price: { type: Number, required: true, min: 1, max: 5 },
  duration: { type: Number, required: true },
  likes: { type: Number, default: 0 },
  hashtags: { type: Array, required: true },
  cardPhoto: { type: String, required: true },
  comments: { type: Array },
  cityId: { type: mongoose.Types.ObjectId, ref: "city" },
});
const Itinerary = mongoose.model("itinerary", itinerarySchema);

module.exports = Itinerary;
