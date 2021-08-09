import React, { Component } from "react";
import CitiesCarousel from "../components/CitiesCarousel";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default class Home extends Component {
  render() {
    const carouselItems = [
      [
        {
          id: "1",
          name: "brugges.jpg",
          title: "Brugges - Belgium",
        },
        {
          id: "2",
          name: "paris.jpg",
          title: "Paris - France",
        },
        {
          id: "3",
          name: "london.jpg",
          title: "London - England",
        },
        {
          id: "4",
          name: "barcelona.jpg",
          title: "Barcelona - Spain",
        },
      ],
      [
        {
          id: "5",
          name: "beijing.jpg",
          title: "Beijing - China",
        },
        {
          id: "6",
          name: "cairo.jpg",
          title: "Cairo - Egypt",
        },
        {
          id: "7",
          name: "casablanca.jpg",
          title: "Casablanca - Morocco",
        },
        {
          id: "8",
          name: "tokyo.jpg",
          title: "Tokyo - Japan",
        },
      ],
      [
        {
          id: "9",
          name: "buenosAires.jpg",
          title: "Buenos Aires - Argentina",
        },
        {
          id: "10",
          name: "cartagena.jpg",
          title: "Cartagena -  Colombia",
        },
        {
          id: "11",
          name: "newYork.jpg",
          title: "New York - United States",
        },
        {
          id: "12",
          name: "laHabana.jpg",
          title: "La Habana - Cuba",
        },
      ],
    ];
    return (
      <div className="contenidoHome">
        {/* <Header /> */}
        <Hero />
        <CitiesCarousel carouselItems={carouselItems} />
      </div>
    );
  }
}
