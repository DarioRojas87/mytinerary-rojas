const Itinerary = require("../models/Itinerary");

const itinerariesControllers = {
  getItineraries: (req, res) => {
    Itinerary.find()
      .populate("cityId")
      .then((itineraries) => {
        if (itineraries.length > 0) {
          res.json({ success: true, response: itineraries });
        } else {
          throw new Error();
        }
      })
      .catch((error) => res.json({ success: false, response: error }));
  },
  uploadNewItinerary: (req, res) => {
    //le pido al modelo que grabe en la DB un nuevo itinerario
    const itineraryToUpload = new Itinerary({
      name: req.body.name,
      description: req.body.description,
      author: req.body.author,
      price: req.body.price,
      duration: req.body.duration,
      likes: req.body.likes,
      hashtags: req.body.hashtags,
      cardPhoto: req.body.cardPhoto,
      comments: req.body.comments,
      cityId: req.body.cityId,
    });
    itineraryToUpload
      .save()
      .then(() => res.json({ succes: true }))
      .catch((err) => res.json({ success: false, response: err }));
  },
  getItinerariesByCity: (req, res) => {
    Itinerary.find({ cityId: req.params.city })
      .populate("cityId")
      .then((itineraries) => {
        if (itineraries.length > 0) {
          res.json({ success: true, response: itineraries });
        } else {
          throw new Error();
        }
      })
      .catch((error) => res.json({ success: false, response: error }));
  },
  getItineraryById: (req, res) => {
    Itinerary.findOne({ _id: req.params.id })
      .then((itinerary) => {
        if (itinerary) {
          res.json({ success: true, response: itinerary });
        } else {
          throw new Error();
        }
      })
      .catch((error) => {
        res.json({ succes: false, response: error });
      });
  },
  modifyItinerary: (req, res) => {
    Itinerary.findOneAndUpdate({ _id: req.params.id }, { ...req.body })
      .then(() => res.json({ success: true }))
      .catch((err) => {
        res.json({ succes: false, response: err.message });
      });
  },
  deleteItinerary: (req, res) => {
    Itinerary.findOneAndDelete({ _id: req.params.id })
      .then(() => res.json({ success: true }))
      .catch((err) => {
        res.json({ succes: false, response: err.message });
      });
  },
};

module.exports = itinerariesControllers;
