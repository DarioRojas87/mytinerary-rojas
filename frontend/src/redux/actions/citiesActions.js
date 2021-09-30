import axios from "axios";

const citiesActions = {
  getList: () => {
    //action creator
    return async (dispatch) => {
      try {
        let response = await axios.get(
          "https://mytinerary-rojas.herokuapp.com/api/cities"
        );
        let data = response.data.response;
        dispatch({ type: "GET_ALL_CITIES", payload: data });
        return { success: true };
      } catch (err) {
        return { success: false, error: err };
      }
    };
  },
  filterCities: (targetValue) => {
    return (dispatch) => {
      dispatch({ type: "FILTER_CITIES", payload: targetValue });
    };
  },
};

export default citiesActions;
