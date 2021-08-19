const Itinerary = require("../models/Itinerary");

const itinerariesControllers = {
  getItineraries: (req, res) => {
    Itinerary.find()
      .then((itineraries) => {
        if (itineraries.length > 0) {
          console.log("entra al if");
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
      photo: req.body.photos,
      comments: req.body.comments,
    });
    itineraryToUpload
      .save()
      .then(() => res.json({ succes: true }))
      .catch((err) => res.json({ success: false, response: err }));
  },
};

module.exports = itinerariesControllers;
