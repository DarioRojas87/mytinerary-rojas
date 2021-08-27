import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar1 from "./components/Navbar";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import NotFound404 from "./pages/NotFound404";
import City from "./pages/City";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useEffect } from "react";
import { connect } from "react-redux";
import userActions from "./redux/actions/userActions";

const App = (props) => {
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      props.signInLocalStorage(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="contenedor">
        <Navbar1 />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} />
          <Route path="/city/:id" component={City} />
          {!props.isLoggedIn && <Route path="/signin" component={SignIn} />}
          {!props.isLoggedIn && <Route path="/signup" component={SignUp} />}
          <Route path="/notFound" component={NotFound404} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};
const mapDispatchToProps = {
  signInLocalStorage: userActions.signInLocalStorage,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
