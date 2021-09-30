import axios from "axios";

const userActions = {
  signUp: (newUser) => {
    return (dispatch) => {
      return axios
        .post("https://mytinerary-rojas.herokuapp.com/api/user/signup", {
          ...newUser,
        })
        .then((response) => {
          if (response.data.success) {
            dispatch({
              type: "SIGN_INTO_SYSTEM",
              payload: {
                token: response.data.response.token,
                user: response.data.response,
              },
            });
            return { success: true, message: "Everything is ok" };
          } else if (!response.data.success) {
            return {
              success: false,
              message: response.data.error,
              errors: response.data.errors,
            };
          } else {
            throw new Error();
          }
        })
        .catch((error) => {
          return {
            success: false,
            message: "Something went wrong, try again later...",
          };
        });
    };
  },
  signIn: (newUser) => {
    return async (dispatch) => {
      let respuesta = await axios.post(
        "https://mytinerary-rojas.herokuapp.com/api/user/signin",
        {
          ...newUser,
        }
      );
      if (respuesta.data.success) {
        dispatch({
          type: "SIGN_INTO_SYSTEM",
          payload: {
            token: respuesta.data.response.token,
            user: respuesta.data.response,
          },
        });
      }
      return respuesta;
    };
  },

  signOut: () => {
    return (dispatch) => {
      dispatch({ type: "SIGN_OUT" });
    };
  },

  signInLocalStorage: (token) => {
    return (dispatch) => {
      return axios
        .get("https://mytinerary-rojas.herokuapp.com/api/checkToken", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          dispatch({
            type: "SIGN_INTO_SYSTEM",
            payload: { token: token, user: response.data.response },
          });
          return response;
        })
        .catch((error) => {
          return dispatch({ type: "SIGN_OUT" });
        });
    };
  },
};

export default userActions;
