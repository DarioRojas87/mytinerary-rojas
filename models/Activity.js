const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  itineraryId: { type: mongoose.Types.ObjectId, ref: "itinerary" },
});
const Activity = mongoose.model("activity", activitySchema);

module.exports = Activity;
