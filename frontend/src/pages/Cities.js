import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cities = (props) => {
  const [cities, setCities] = useState([]);
  const [searchCities, setSearchCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cities")
      .then((response) => {
        if (response.data.success) {
          console.log("el backend funciona y envia una respuesta");
          setCities(response.data.response);
          setSearchCities(response.data.response);
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        toast.error("Something went wrong! Redirecting to Home", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          props.history.push("/");
        }, 5000);
        return () => clearTimeout;
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchHandler = (e) => {
    setSearchCities(
      cities.filter((city) => {
        return searchCities === ""
          ? city
          : city.title
              .toLowerCase()
              .startsWith(e.target.value.toLowerCase().trim());
      })
    );
  };
  console.log(cities);
  console.log(searchCities);

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
          {searchCities.length > 0 ? (
            searchCities.map((city, index) => {
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
            })
          ) : (
            <h1
              style={{
                textAlign: "center",
              }}
            >
              No results were found for your search, please try another city!
            </h1>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Cities;
