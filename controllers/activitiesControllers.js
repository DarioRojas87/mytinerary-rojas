const Activity = require("../models/Activity");

const activitiesControllers = {
  uploadNewActivity: (req, res) => {
    //le pido al modelo que grabe en la DB un nuevo itinerario
    const activityToUpload = new Activity({
      name: req.body.name,
      photo: req.body.photo,
      itineraryId: req.body.itineraryId,
    });
    activityToUpload
      .save()
      .then(() => res.json({ succes: true }))
      .catch((err) => res.json({ success: false, response: err }));
  },
  getActivitiesByItinerary: (req, res) => {
    Activity.find({ itineraryId: req.params.itinerary })
      .populate("itineraryId")
      .then((activities) => {
        if (activities.length > 0) {
          res.json({ success: true, response: activities });
        } else {
          throw new Error();
        }
      })
      .catch((error) => res.json({ success: false, response: error }));
  },
};
module.exports = activitiesControllers;
