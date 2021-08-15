import Carousel from "react-bootstrap/Carousel";
import CitiesSlide from "./CitiesSlide";

const CitiesCarousel = ({ carouselItems }) => {
  return (
    <div className="carouselCities">
      <h1 className="py-5 carouselTitle">Popular MyTineraries</h1>
      <Carousel fade>
        {carouselItems.map((cities, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="slidePadre">
                <CitiesSlide cities={cities} />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CitiesCarousel;
