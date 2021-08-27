const userReducer = (state = { token: null, user: {} }, action) => {
  switch (action.type) {
    case "SIGN_INTO_SYSTEM":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        token: action.payload.token,
        user: action.payload,
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        token: null,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
