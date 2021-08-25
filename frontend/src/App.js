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

const App = () => {
  return (
    <BrowserRouter>
      <div className="contenedor">
        <Navbar1 />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} />
          <Route path="/city/:id" component={City} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/notFound" component={NotFound404} />
          <Redirect to="/notFound" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
