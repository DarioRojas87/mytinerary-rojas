import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <Carousel className="slider" fade>
          <Carousel.Item interval={3000}>
            <div className="caption1">
              <video
                src="https://assets.mixkit.co/videos/preview/mixkit-young-man-walking-listening-to-music-from-his-headphones-4855-large.mp4"
                autoPlay
                loop
                muted
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <div className="caption2">
              <video
                src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-hot-air-balloon-over-turkish-landscape-12977-large.mp4"
                autoPlay
                loop
                muted
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <div className="caption3">
              <video
                src="https://assets.mixkit.co/videos/preview/mixkit-honeymoon-of-a-couple-looking-on-a-map-4651-large.mp4"
                autoPlay
                loop
                muted
              />
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="covertext">
          <img
            className="animate__animated animate__fadeInDownBig"
            src="./assets/img/logo1.png"
            alt="MyTinerary Logo"
          />
          <h1 className="title animate__animated animate__fadeInUp animate__delay-1s">
            MyTinerary
          </h1>
          <div>
            <h3 className="subtitle">
              Find your perfect trip, designed by insiders who know and love
              their cities!
            </h3>
            <NavLink className="navLink callToAction" exact to="/cities">
              <button className="btnHome">
                <span>START YOUR ADVENTURE!</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
