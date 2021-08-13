import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";

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

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [searchCities, setSearchCities] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:4000/api/cities").then((response) => {
      setCities(response.data.response);
      setLoading(false);
      console.log(response.data.response);
    });
  }, []);

  const searchHandler = (e) => {
    setSearchCities(e.target.value);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Header />
      <div className="citiesContent">
        <div className="searchBar">
          <form className="searchform group">
            <input
              type="search"
              id="search-box"
              placeholder="Search your Dream Destination"
              onChange={searchHandler}
            />
            <label htmlFor="search-box">
              <span className="fa fa-2x fa-search"></span>
            </label>
          </form>
        </div>
        <div className="containerCities">
          {cities
            .filter((cities) => {
              let citiesFiltered =
                searchCities === ""
                  ? cities
                  : cities.title
                      .toLowerCase()
                      .startsWith(searchCities.toLowerCase().trim());
              return citiesFiltered;
              // if (searchCities === "") {
              //   return cities;
              // } else if (
              //   cities.title
              //     .toLowerCase()
              //     .startsWith(searchCities.toLowerCase().trim())
              // ) {
              //   return cities;
              // }
            })
            .map((city, index) => {
              return (
                <Link key={index} to={`/city/${city._id}`}>
                  <figure className="cities-grid effect-move">
                    <img
                      className="cities-grid-image effect-image"
                      src={`/assets/img/${city.name}`}
                      alt=""
                    />
                    <figcaption className="cities-grid-content">
                      <span className="cities-tag effect-target">CITY</span>
                      <h2 className="cities-grid-title effect-target">
                        {city.title}
                      </h2>
                      <p className="cities-grid-text effect-target effect-text">
                        {city.subtitle}
                      </p>
                    </figcaption>
                  </figure>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Cities;
