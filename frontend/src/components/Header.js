import Carousel from "react-bootstrap/Carousel";
const Header = () => {
  return (
    <>
      <Carousel className="slider" fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/FJPT5455KR5K1589912863345.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.xtrafondos.com/descargar.php?id=5488&resolucion=3840x2159"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images7.alphacoders.com/103/1032366.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Header;
