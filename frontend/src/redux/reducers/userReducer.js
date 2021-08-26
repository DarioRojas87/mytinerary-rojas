const userReducer = (
  state = { isLoggedIn: false, token: null, user: null },
  action
) => {
  switch (action.type) {
    case "SIGN_INTO_SYSTEM":
      return {
        isLoggedIn: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
