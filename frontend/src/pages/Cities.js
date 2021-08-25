import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";

const Cities = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    async function getCitiesList() {
      let response = await props.getCitiesList();
      if (response && response.error) {
        toast.error("Something went wrong! Redirecting to Home", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          onClose: () => props.history.push("/"),
        });
      }
    }
    getCitiesList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchHandler = (e) => {
    props.filterCitiesList(e.target.value.toLowerCase().trim());
  };

  if (props.citiesList.length === 0) {
    return (
      <>
        <Loader />
        <ToastContainer />
      </>
    );
  }
  return (
    <>
      <div
        className="header"
        style={{
          backgroundImage: `url("/assets/img/headerBackground.jpg")`,
        }}
      >
        <span className="animate__animated animate__fadeInDownBig">
          MyTinerary
        </span>
        <h1 className=" animate__animated animate__fadeInUp animate__delay-1s">
          CITIES
        </h1>

        <div className="mouse">
          <span></span>
        </div>
      </div>
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
          {props.filteredCitiesList.length > 0 ? (
            props.filteredCitiesList.map((city, index) => {
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

const mapStateToProps = (state) => {
  return {
    citiesList: state.cities.citiesList,
    filteredCitiesList: state.cities.filteredCitiesList,
  };
};

const mapDispatchToProps = {
  getCitiesList: citiesActions.getList,
  filterCitiesList: citiesActions.filterCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
