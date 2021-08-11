import Header from "../components/Header";

const cities = [
  {
    id: "1",
    name: "bruges.jpg",
    title: "Bruges",
    subtitle: "BELGIUM",
  },
  {
    id: "2",
    name: "paris.jpg",
    title: "Paris",
    subtitle: "FRANCE",
  },
  {
    id: "3",
    name: "london.jpg",
    title: "London",
    subtitle: "ENGLAND",
  },
  {
    id: "4",
    name: "barcelona.jpg",
    title: "Barcelona",
    subtitle: "SPAIN",
  },
  {
    id: "5",
    name: "beijing.jpg",
    title: "Beijing",
    subtitle: "CHINA",
  },
  {
    id: "6",
    name: "cairo.jpg",
    title: "Cairo",
    subtitle: "EGYPT",
  },
  {
    id: "7",
    name: "casablanca.jpg",
    title: "Casablanca",
    subtitle: "MOROCCO",
  },
  {
    id: "8",
    name: "tokyo.jpg",
    title: "Tokyo",
    subtitle: "JAPAN",
  },
  {
    id: "9",
    name: "buenosAires.jpg",
    title: "Buenos Aires",
    subtitle: "ARGENTINA",
  },
  {
    id: "10",
    name: "cartagena.jpg",
    title: "Cartagena",
    subtitle: "COLOMBIA",
  },
  {
    id: "11",
    name: "newYork.jpg",
    title: "New York",
    subtitle: "UNITED STATES",
  },
  {
    id: "12",
    name: "laHabana.jpg",
    title: "La Habana",
    subtitle: "CUBA",
  },
];

const Cities = () => {
  return (
    <>
      <Header />
      <div className="citiesContent">
        <div class="containerCities">
          {cities.map((city) => {
            return (
              <figure class="cities-grid effect-move">
                <img
                  class="cities-grid-image effect-image"
                  src={`/assets/img/${city.name}`}
                  alt=""
                />
                <figcaption class="cities-grid-content">
                  <span class="cities-tag effect-target">CITY</span>
                  <h2 class="cities-grid-title effect-target">{city.title}</h2>
                  <p class="cities-grid-text effect-target effect-text">
                    {city.subtitle}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cities;
