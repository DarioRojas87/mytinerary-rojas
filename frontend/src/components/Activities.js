import Carousel from "react-bootstrap/Carousel";
const Activities = (props) => {
  return (
    <>
      <Carousel className="activitiesCarousel" fade>
        {props.activities.map((activity, index) => {
          return (
            <Carousel.Item key={index}>
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
      </Carousel>
    </>
  );
};

export default Activities;
