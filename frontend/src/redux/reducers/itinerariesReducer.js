const itinerariesReducer = (state = { itinerariesList: [] }, action) => {
  //recibe una action y modifica el store de alguna manera.
  switch (action.type) {
    case "GET_ITINERARY_BY_CITY":
      return {
        ...state,
        itinerariesList: action.payload,
      };
    case "GET_ALL_ITINERARIES":
      return {
        ...state,
        itinerariesList: action.payload,
      };

    case "CLEAN_ITINERARIES":
      return {
        ...state,
        itinerariesList: [],
      };

    default:
      return state;
  }
};

export default itinerariesReducer;
