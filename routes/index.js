const express = require("express");
const router = express.Router();
const citiesListControllers = require("../controllers/citiesListControllers");

router
  .route("/cities")
  .get(citiesListControllers.getCities)
  .post(citiesListControllers.uploadNewCity);

router
  .route("/city/:id")
  .get(citiesListControllers.getCity)
  .delete(citiesListControllers.deleteCity)
  .put(citiesListControllers.modifyCity);

module.exports = router;