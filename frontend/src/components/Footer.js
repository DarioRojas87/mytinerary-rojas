import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div id="button"></div>
      <div id="container">
        <div className="contenidoFooter d-flex justify-content-center align-items-center flex-wrap">
          <NavLink className="navLink " exact to="/">
            Home
          </NavLink>
          <div className="d-flex">
            <h1>MyTinerary</h1>
          </div>
          <NavLink className="navLink" to="/cities">
            Cities
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
