import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import userActions from "../redux/actions/userActions";

const Navbar1 = (props) => {
  console.log(props);
  console.log("consolelog de navbar");

  return (
    <Navbar
      className="navbar-default"
      collapseOnSelect
      fixed="top"
      expand="lg"
      bg="transparent"
      variant="dark"
    >
      <Navbar.Brand className="py-0 ">
        <div className="brand">
          <img
            src="/assets/img/logo.png"
            className="d-inline-block align-top logo"
            alt="MyTinerary Logo"
          ></img>
          <h2>MyTinerary</h2>
        </div>
      </Navbar.Brand>

      <Nav>
        {props.isLoggedIn ? (
          <div className="profilePicture">
            <img src={props.user.photoUrl} className="image--cover" />
            <p>{props.user.name}</p>
          </div>
        ) : (
          <NavLink className="navLink" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </NavLink>
        )}
      </Nav>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto fs-4">
          <NavLink className="navLink" exact to="/">
            Home
          </NavLink>
          <NavLink className="navLink" to="/cities">
            Cities
          </NavLink>
          {!props.isLoggedIn && (
            <NavLink className="navLink" to="/signin">
              Sign In
            </NavLink>
          )}
          {!props.isLoggedIn && (
            <NavLink className="navLink" to="/signup">
              Sign Up
            </NavLink>
          )}
          {props.isLoggedIn && (
            <p className="navLink signOut" onClick={() => props.signOut()}>
              Sign Out
            </p>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state.user.user,
  };
};

const mapDispatchToProps = {
  signOut: userActions.signOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar1);
