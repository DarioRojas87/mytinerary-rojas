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
      toast.error("Something went wrong! Redirecting to Cities", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => props.history.push("/cities"),
      });

      return () => props.cleanItineraries();
    }

    async function getItineraries() {
      let response = await props.getItineraries(props.match.params.id);
      if (response && response.error) {
        console.log(response.error);
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

        <Link to="/cities">Go Back to Cities</Link>

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

// axios
//   .get(`http://localhost:4000/api/city/${props.match.params.id}`)
//   .then((res) => {
//     if (res.data.success) {
//       setCity(res.data.response);
//     } else {
//       throw new Error();
//     }
//   })
//   .catch((err) => {
//     toast.error("Something went wrong! Redirecting to Cities", {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//     setTimeout(() => {
//       props.history.push("/cities");
//     }, 5000);
//     return () => clearTimeout;
//   });

// useEffect(() => {
//   axios
//     .get("http://localhost:4000/api/itineraries")
//     .then((res) => {
//       if (res.data.success) {
//         setItineraries(res.data.response);
//       } else {
//         throw new Error();
//       }
//     })
//     .catch((err) => {
//       toast.error("Something went wrong! Redirecting to Cities", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//       setTimeout(() => {
//         props.history.push("/cities");
//       }, 5000);
//       return () => clearTimeout;
//     });
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);

// async function getItinerarios() {
//   try {
//     await props.getItineraries(props.match.params.id);
//     console.log(props.itinerariesList);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getItinerarios();
// props.getItinerariesList();
