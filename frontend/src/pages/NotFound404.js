import { NavLink } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div
      class="notFound404"
      style={{
        backgroundImage:
          "url(https://www.trecebits.com/wp-content/uploads/2020/11/Error-404.jpg)",
      }}
    >
      <NavLink className="navLink" exact to="/">
        <button className="btnHome">
          <span>Return to Home</span>
        </button>
      </NavLink>
    </div>
  );
};

export default NotFound404;
