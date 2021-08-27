const userReducer = (state = { isLoggedIn: false, user: {} }, action) => {
  switch (action.type) {
    case "SIGN_INTO_SYSTEM":
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case "SIGN_OUT":
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
