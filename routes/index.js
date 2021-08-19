const express = require("express");
const router = express.Router();
const citiesListControllers = require("../controllers/citiesListControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");

router
  .route("/cities")
  .get(citiesListControllers.getCities)
  .post(citiesListControllers.uploadNewCity);

router
  .route("/city/:id")
  .get(citiesListControllers.getCity)
  .delete(citiesListControllers.deleteCity)
  .put(citiesListControllers.modifyCity);

router
  .route("/itineraries")
  .get(itinerariesControllers.getItineraries)
  .post(itinerariesControllers.uploadNewItinerary);
module.exports = router;
