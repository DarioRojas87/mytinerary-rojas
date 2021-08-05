import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default class Home extends Component {
  render() {
    return (
      <div className="contenedor">
        <Header />
        <div className="contenidoHome">
          <Main
            breed="German Shepherd"
            weight1="66 pounds"
            height1="1,64 foots"
            coatColor="black and tan"
          />
        </div>
        <Footer />
      </div>
    );
  }
}
