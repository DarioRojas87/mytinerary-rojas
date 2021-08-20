import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Itinerary from "../components/Itinerary";

const City = (props) => {
  const [city, setCity] = useState({});
  const [itineraries, setItineraries] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/city/${props.match.params.id}`)
      .then((res) => {
        if (res.data.success) {
          setCity(res.data.response);
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        toast.error("Something went wrong! Redirecting to Cities", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          props.history.push("/cities");
        }, 5000);
        return () => clearTimeout;
      });
    console.log(props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/itineraries")
      .then((res) => {
        if (res.data.success) {
          setItineraries(res.data.response);
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        toast.error("Something went wrong! Redirecting to Cities", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          props.history.push("/cities");
        }, 5000);
        return () => clearTimeout;
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header city={city} />
      <div className="contentCity">
        {itineraries.map((itinerary, index) => {
          return <Itinerary key={index} itinerary={itinerary} />;
        })}

        <Link to="/cities">Go Back to Cities</Link>

        <ToastContainer />
      </div>
    </>
  );
};

export default City;
