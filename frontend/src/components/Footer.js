import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="footer">
      <div id="button"></div>
      <div id="container">
        <div className="contenidoFooter d-flex justify-content-center align-items-center flex-wrap">
          <NavLink className="navLink " exact to="/">
            Home
          </NavLink>
          <NavLink className="navLink" to="/cities">
            Cities
          </NavLink>
          <div className="d-flex">
            <h1>MyTinerary</h1>
          </div>
          {!props.token && (
            <NavLink className="navLink" to="/signin">
              Sign In
            </NavLink>
          )}
          {!props.token && (
            <NavLink className="navLink" to="/signup">
              Sign Up
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    user: state.user.user,
  };
};
export default connect(mapStateToProps)(Footer);
