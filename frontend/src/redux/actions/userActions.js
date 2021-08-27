import axios from "axios";

const userActions = {
  signUp: (newUser) => {
    // return async (dispatch) => {
    //   let respuesta = await axios.post(
    //     "http://localhost:4000/api/user/signup",
    //     { ...newUser }
    //   );
    //   if (respuesta.data.success) {
    //     dispatch({
    //       type: "SIGN_INTO_SYSTEM",
    //       payload: respuesta.data.response,
    //     });
    //   }
    //   return respuesta;
    // };

    return (dispatch) => {
      return axios
        .post("http://localhost:4000/api/user/signup", { ...newUser })
        .then((response) => {
          console.log(response);
          if (response.data.success) {
            console.log("cayo en if que setea el data para dispatch");
            console.log(response.data.response);
            dispatch({
              type: "SIGN_INTO_SYSTEM",
              payload: response.data.response,
            });
            return response;
          } else {
            throw new Error();
          }
        })
        .catch((e) => {
          console.log("entra en catch");
          console.log(e);
        });
    };
  },
  signIn: (newUser) => {
    return async (dispatch) => {
      let respuesta = await axios.post(
        "http://localhost:4000/api/user/signin",
        { ...newUser }
      );
      if (respuesta.data.success) {
        console.log(respuesta.data.response.name);
        dispatch({
          type: "SIGN_INTO_SYSTEM",
          payload: respuesta.data.response,
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

  signInLocalStorage: (user) => {
    return (dispatch) => {
      dispatch({ type: "SIGN_INTO_SYSTEM", payload: user });
    };
  },
};

export default userActions;
