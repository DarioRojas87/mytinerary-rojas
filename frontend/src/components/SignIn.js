import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

const SignIn = (props) => {
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
      toast.error(`${response.data.error}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const responseGoogle = async (res) => {
    let logGoogleUser = {
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      flagGoogle: true,
    };

    let response = await props.signIn(logGoogleUser);
    if (!response.data.success) {
      toast.error(`${response.data.error}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <div className="login signIn">
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
        <GoogleLogin
          clientId="282259074384-ulqapk8gcj71sf3oald9uej24m3liule.apps.googleusercontent.com"
          buttonText="Sign In with Google Account"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          className="googleButton signin"
        />
        <p>
          You still do not have an account? Create one here{" "}
          <Link to="/signup">HERE</Link>
        </p>
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
