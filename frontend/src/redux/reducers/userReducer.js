const userReducer = (state = { token: null, user: {} }, action) => {
  switch (action.type) {
    case "SIGN_INTO_SYSTEM":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("userId", JSON.stringify(action.payload.user.id));
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("userId");
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
