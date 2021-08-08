import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import CitiesCarousel from "./components/CitiesCarousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar1 from "./components/Navbar";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import NotFound404 from "./pages/NotFound404";

const App = () => {
  return (
    <BrowserRouter>
      <div className="contenedor">
        <Navbar1 />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} />
          <Route path="/notFound" component={NotFound404} />
          <Redirect to="/notFound" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
