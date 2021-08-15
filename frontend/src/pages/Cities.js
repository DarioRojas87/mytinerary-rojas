import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [searchCities, setSearchCities] = useState("");
  const [loading, setLoading] = useState(true);
  //const [citiesFiltered, setCitiesFiltered] = useState(cities);

  useEffect(() => {
    axios.get("http://localhost:4000/api/cities").then((response) => {
      setCities(response.data.response);
      setLoading(false);
      // console.log(response.data.response);
    });
  }, []);

  const searchHandler = (e) => {
    setSearchCities(e.target.value);
  };

  console.log(searchCities);
  console.log(cities);

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
            })
            .map((city, index) => {
              console.log(city);

              return (
                <figure key={index} className="cities-grid effect-move">
                  <Link className="cityLink" to={`/city/${city._id}`}></Link>
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
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Cities;
