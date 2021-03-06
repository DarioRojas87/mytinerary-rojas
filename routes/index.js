const express = require("express");
const router = express.Router();
const citiesListControllers = require("../controllers/citiesListControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");
const userControllers = require("../controllers/userControllers");
const activitiesControllers = require("../controllers/activitiesControllers");
const commentsControllers = require("../controllers/commentsControllers");
const passport = require("passport");
const validator = require("../controllers/validator");

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

router
  .route("/itineraries/:city")
  .get(itinerariesControllers.getItinerariesByCity);

router
  .route("/itinerary/:id")
  .get(itinerariesControllers.getItineraryById)
  .put(itinerariesControllers.modifyItinerary)
  .delete(itinerariesControllers.deleteItinerary);

router.route("/user/signup").post(validator, userControllers.newUser);
router.route("/user/signin").post(userControllers.logUser);

router
  .route("/checkToken")
  .get(
    passport.authenticate("jwt", { session: false }),
    userControllers.checkToken
  );

router.route("/activities").post(activitiesControllers.uploadNewActivity);

router
  .route("/activities/:itinerary")
  .get(activitiesControllers.getActivitiesByItinerary);

router
  .route("/comments/:itinerary")
  .post(
    passport.authenticate("jwt", { session: false }),
    commentsControllers.newComment
  )

  .delete(commentsControllers.deleteComment);
module.exports = router;
