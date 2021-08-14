const City = require("../models/City");

// const cities = [
//   {
//     id: "1",
//     name: "bruges.jpg",
//     title: "Bruges",
//     subtitle: "BELGIUM",
//   },
//   {
//     id: "2",
//     name: "paris.jpg",
//     title: "Paris",
//     subtitle: "FRANCE",
//   },
//   {
//     id: "3",
//     name: "london.jpg",
//     title: "London",
//     subtitle: "ENGLAND",
//   },
//   {
//     id: "4",
//     name: "barcelona.jpg",
//     title: "Barcelona",
//     subtitle: "SPAIN",
//   },
//   {
//     id: "5",
//     name: "beijing.jpg",
//     title: "Beijing",
//     subtitle: "CHINA",
//   },
//   {
//     id: "6",
//     name: "cairo.jpg",
//     title: "Cairo",
//     subtitle: "EGYPT",
//   },
//   {
//     id: "7",
//     name: "casablanca.jpg",
//     title: "Casablanca",
//     subtitle: "MOROCCO",
//   },
//   {
//     id: "8",
//     name: "tokyo.jpg",
//     title: "Tokyo",
//     subtitle: "JAPAN",
//   },
//   {
//     id: "9",
//     name: "buenosAires.jpg",
//     title: "Buenos Aires",
//     subtitle: "ARGENTINA",
//   },
//   {
//     id: "10",
//     name: "cartagena.jpg",
//     title: "Cartagena",
//     subtitle: "COLOMBIA",
//   },
//   {
//     id: "11",
//     name: "newYork.jpg",
//     title: "New York",
//     subtitle: "UNITED STATES",
//   },
//   {
//     id: "12",
//     name: "laHabana.jpg",
//     title: "La Habana",
//     subtitle: "CUBA",
//   },
// ];

const citiesListControllers = {
  //le pido al modelo que me busque en la BD todos los invitados y los almaceno en la variable cities
  getCities: (req, res) => {
    console.log("Fetcheo ciudades desde base de datos");
    City.find().then((cities) => res.json({ response: cities }));
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
    console.log("Obtengo una unica ciudad");
    City.findOne({ _id: req.params.id }).then((city) =>
      res.json({ response: city })
    );
  },
  deleteCity: (req, res) => {
    //le pido al modelo que borre de la DB la city que le estoy pidiendo
    City.findOneAndDelete({ _id: req.params.id }).then(() =>
      res.json({ success: true })
    );
  },
  modifyCity: (req, res) => {
    //le pido al modelo que busque una city para poder modificarla con los datos que le estoy enviando
    City.findOneAndUpdate({ _id: req.params.id }, { ...req.body }).then(() =>
      res.json({ success: true })
    );
  },
};
module.exports = citiesListControllers;
