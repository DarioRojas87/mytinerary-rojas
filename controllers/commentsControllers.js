const Itinerary = require("../models/Itinerary");

const commentsControllers = {
  newComment: (req, res) => {
    Itinerary.findOneAndUpdate(
      { _id: req.params.itinerary },
      { $push: { comments: { ...req.body.newComment } } }
    )
      .then(() => res.json({ success: true }))
      .catch((err) => {
        res.json({ succes: false, response: err });
      });
  },

  deleteComment: (req, res) => {
    Itinerary.findOneAndUpdate(
      { _id: req.params.itinerary },
      { $pull: { comments: { _id: req.body.commentId } } }
    )
      .then(() => res.json({ success: true }))
      .catch((err) => {
        res.json({ succes: false, response: err });
      });
  },
};
module.exports = commentsControllers;
