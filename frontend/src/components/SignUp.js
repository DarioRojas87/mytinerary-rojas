import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";

const SignUp = (props) => {
  const [newUser, setNewUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    photoUrl: "",
    country: "",
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

  const handleSubmit = async () => {
    let response = await props.signUp(newUser);
    console.log(response);
    // if (response.data.response) {
    //LISTO PARA CATCHEAR ERRORES Y PARA DAR EL OK CON TOASTIFY
    // }
  };

  return (
    <>
      <div className="login">
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
        </form>
        <button className="signin" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

const mapDispatchToProps = {
  signUp: userActions.signUp,
};

export default connect(null, mapDispatchToProps)(SignUp);

// axios
//   .post("http://localhost:4000/api/user/signup", { ...newUser })
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
