import Carousel from "react-bootstrap/Carousel";
import CitiesSlide from "./CitiesSlide";

const CitiesCarousel = ({ carouselItems }) => {
  return (
    <div className="carouselCities">
      <Carousel>
        {carouselItems.map((cities) => {
          return (
            <Carousel.Item>
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
