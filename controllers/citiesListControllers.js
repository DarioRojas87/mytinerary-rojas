const City = require("../models/City");

const citiesListControllers = {
  //le pido al modelo que me busque en la BD todos los invitados y los almaceno en la variable cities
  getCities: (req, res) => {
    console.log("Fetcheo ciudades desde base de datos");
    City.find()
      .then((cities) => {
        if (cities.length > 0) {
          console.log("entra al if");
          res.json({ success: true, response: cities });
        } else {
          throw new Error();
        }
      })
      .catch((error) => res.json({ success: false, response: error }));
  },
  uploadNewCity: (req, res) => {
    //le pido al modelo que grabe en la DB una nueva city
    const cityToUpload = new City({
      name: req.body.name,
      title: req.body.title,
      subtitle: req.body.subtitle,
    });
    cityToUpload
      .save()
      .then(() => res.json({ succes: true }))
      .catch((err) => res.json({ success: false, error: err }));
  },
  getCity: (req, res) => {
    //pido al modelo que busque en la BD la ciudad puntual que me esta pidiendo el front ( a traves del id)

    City.findOne({ _id: req.params.id })
      .then((city) => {
        if (city) {
          console.log("Obtengo una unica ciudad");
          res.json({ success: true, response: city });
        } else {
          throw new Error();
        }
      })
      .catch((error) => {
        res.json({ succes: false, response: error.message });
      });
  },
  deleteCity: (req, res) => {
    //le pido al modelo que borre de la DB la city que le estoy pidiendo
    City.findOneAndDelete({ _id: req.params.id })
      .then(() => res.json({ success: true }))
      .catch((err) => {
        res.json({ succes: false, response: err.message });
      });
  },
  modifyCity: (req, res) => {
    //le pido al modelo que busque una city para poder modificarla con los datos que le estoy enviando
    City.findOneAndUpdate({ _id: req.params.id }, { ...req.body })
      .then(() => res.json({ success: true }))
      .catch((err) => {
        res.json({ succes: false, response: err.message });
      });
  },
};
module.exports = citiesListControllers;
