import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Itinerary from "../components/Itinerary";

import itinerariesActions from "../redux/actions/itinerariesActions";

const City = (props) => {
  const [city, setCity] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);

    const found = props.citiesList.find(
      (city) => props.match.params.id === city._id
    );
    if (found) {
      setCity(found);
    } else {
      props.history.push("/cities");
      return () => props.cleanItineraries();
    }

    async function getItineraries() {
      let response = await props.getItineraries(props.match.params.id);
      if (response && response.error) {
      }
    }
    getItineraries();

    return () => props.cleanItineraries();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header city={city} />
      <div className="contentCity">
        {props.itinerariesList.length > 0 ? (
          props.itinerariesList.map((itinerary, index) => {
            return <Itinerary key={index} itinerary={itinerary} />;
          })
        ) : (
          <>
            <h1>
              No itineraries were found for this city, we're sorry. Try another
              city!
            </h1>
            <img
              alt="sorry doggo"
              className="noItinerariesImg"
              src="https://i.giphy.com/media/ftrPtuqQUIZ5opePYS/giphy.gif"
            />
          </>
        )}
        <button className="btnHome">
          <span>
            <Link to="/cities">Go Back to Cities</Link>
          </span>
        </button>

        <ToastContainer />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    citiesList: state.cities.citiesList,
    itinerariesList: state.itineraries.itinerariesList,
  };
};

const mapDispatchToProps = {
  getItineraries: itinerariesActions.getItinerariesByCity,
  getItinerariesList: itinerariesActions.getAllItineraries,
  cleanItineraries: itinerariesActions.cleanUpItineraries,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
