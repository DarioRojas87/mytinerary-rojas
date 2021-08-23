const citiesReducer = (
  state = { citiesList: [], filteredCitiesList: [] },
  action
) => {
  //recibe una action y modifica el store de alguna manera.
  switch (action.type) {
    case "GET_ALL_CITIES":
      return {
        ...state,
        citiesList: action.payload,
        filteredCitiesList: action.payload,
      };

    case "FILTER_CITIES":
      return {
        ...state,
        filteredCitiesList: state.citiesList.filter((value) =>
          value.title.toLowerCase().startsWith(action.payload)
        ),
      };
    default:
      return state;
  }
};

export default citiesReducer;
