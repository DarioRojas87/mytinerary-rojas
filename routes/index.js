const express = require("express");
const router = express.Router();
const citiesListControllers = require("../controllers/citiesListControllers");

router.route("/cities").get(citiesListControllers.getCities);

router.route("/city/:id").get(citiesListControllers.getCity);

module.exports = router;
