import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Home extends Component {
  render() {
    return (
      <div className="contenedor">
        <Header />
        <div className="contenidoHome"></div>
        <Footer />
      </div>
    );
  }
}
