import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  const [newUser, setNewUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    photoUrl: "",
    country: "Panama",
    google: false,
  });
  const countrysArr = [
    "Argentina",
    "Brazil",
    "Peru",
    "Chile",
    "Colombia",
    "Uruguay",
    "Paraguay",
    "Venezuela",
    "Bolivia",
  ];

  const inputValue = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(newUser).some((value) => value === "")) {
      toast.error("All fields required, try again!", {
        position: "top-center",
        autoClose: 3000,
      });
      return false;
    }
    let response = await props.signUp(newUser);
    if (response.success) {
    } else if (response.errors) {
      response.errors.map((error) => {
        return toast.error(`${error.message}`, {
          position: "top-center",
          autoClose: false,
        });
      });
    } else {
      toast.error(`${response.message}`, {
        position: "top-center",
        autoClose: 3000,
      });
      setNewUser({
        name: "",
        lastName: "",
        email: "",
        password: "",
        photoUrl: "",
        country: "Panama",
        google: false,
      });
    }
  };

  const responseGoogle = async (res) => {
    let newGoogleUser = {
      name: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      photoUrl: res.profileObj.imageUrl,
      country: "Argentina",
      google: true,
    };

    let response = await props.signUp(newGoogleUser);
    if (response.success) {
    } else {
      toast.error(`${response.message}`, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div className="login signUp">
        <h2 className="active"> sign up </h2>
        <form>
          <input
            type="text"
            className="text"
            name="name"
            value={newUser.name}
            onChange={inputValue}
            required
          />
          <span>Name</span>
          <br />
          <input
            type="text"
            className="text"
            name="lastName"
            value={newUser.lastName}
            onChange={inputValue}
            required
          />
          <span>Last Name</span>
          <br />
          <input
            required
            type="text"
            className="text"
            name="photoUrl"
            value={newUser.photoUrl}
            onChange={inputValue}
          />
          <span>Photo URL</span>
          <br />
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
          <span>Country</span>
          <select
            required
            name="country"
            value={newUser.country}
            onChange={inputValue}
          >
            <option value="Panama">Panama</option>
            {countrysArr.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>

          <button className="signin" onClick={handleSubmit}>
            Sign Up
          </button>
          <GoogleLogin
            clientId="282259074384-ulqapk8gcj71sf3oald9uej24m3liule.apps.googleusercontent.com"
            buttonText="Sign Up with Google Account"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className="googleButton signin"
          />
        </form>
        <p>
          Already have account? Please Sign In <Link to="/signin">HERE</Link>
        </p>
      </div>
      <ToastContainer />
    </>
  );
};

const mapDispatchToProps = {
  signUp: userActions.signUp,
};

export default connect(null, mapDispatchToProps)(SignUp);
