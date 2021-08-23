import axios from "axios";

const itinerariesAction = {
  getItinerariesByCity: (city) => {
    return async (dispatch) => {
      try {
        let response = await axios.get(
          `http://localhost:4000/api/itineraries/${city}`
        );
        let data = response.data.response;
        dispatch({ type: "GET_ITINERARY_BY_CITY", payload: data });
        return { success: true };
      } catch (err) {
        return { success: false, error: err };
      }
    };
  },
  getAllItineraries: () => {
    return (dispatch) => {
      axios.get(`http://localhost:4000/api/itineraries`).then((response) => {
        let data = response.data.response;
        dispatch({ type: "GET_ALL_ITINERARIES", payload: data });
      });
    };
  },
  cleanUpItineraries: () => {
    return (dispatch) => {
      dispatch({ type: "CLEAN_ITINERARIES" });
    };
  },
};

export default itinerariesAction;
