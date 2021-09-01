import Carousel from "react-bootstrap/Carousel";
const Activities = (props) => {
  console.log(props.activities);
  return (
    <>
      <Carousel className="activitiesCarousel" fade>
        {props.activities.map((activity) => {
          return (
            <Carousel.Item>
              {/* <img
                className="d-block w-100 h-100"
                src={`/assets/img/${activity.photo}`}
                alt="First slide"
              /> */}
              <div
                className="d-block slideActivities"
                style={{
                  backgroundImage: `url("/assets/img/${activity.photo}")`,
                }}
              ></div>
              <Carousel.Caption>
                <h3 className="activitiesLabel">{activity.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/00/1f/a4.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="activitiesLabel">First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/00/1f/a4.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="activitiesLabel">Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/00/1f/a4.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="activitiesLabel">Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
};

export default Activities;
