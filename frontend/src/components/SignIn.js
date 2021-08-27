import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";

const SignIn = (props) => {
  console.log(props);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const inputValue = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    let response = await props.signIn(newUser);
    if (response.data.success) {
      toast.success(`Welcome Back ${response.data.response.name}!`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Wrong Email or Password, try again!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    // axios
    //   .post("http://localhost:4000/api/user/signin", newUser)
    //   .then((res) => {
    //     if (res.data.success) {
    //       toast.success("Congratulations! now you have an user account", {
    //         position: "top-center",
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //       });
    //     } else {
    //       toast.error("There is another user with that mail. Try again!", {
    //         position: "top-center",
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //       });
    //     }
    //   })
    //   .catch((e) => {
    //     alert("Algo salio mal con el backend");
    //   });
  };

  return (
    <>
      <div className="login">
        <h2 className="active"> Sign in </h2>
        <form>
          <input
            required
            type="text"
            className="text"
            name="email"
            value={newUser.email}
            onChange={inputValue}
          />
          <span>Email</span>
          <br />

          <input
            required
            type="password"
            className="text"
            name="password"
            value={newUser.password}
            onChange={inputValue}
          />
          <span>Password</span>
          <br />
        </form>
        <button className="signin " onClick={handleSubmit}>
          Sign In
        </button>
      </div>
      <ToastContainer />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state.user.user,
  };
};
const mapDispatchToProps = {
  signIn: userActions.signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
