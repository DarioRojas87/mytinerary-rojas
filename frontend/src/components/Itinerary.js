import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import Activities from "./Activities";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Comments from "./Comments";

const Itinerary = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState("View More");
  const [activitiesToRender, setActivitiesToRender] = useState([]);

  const onEntering = () => setStatus("Opening...");

  const onEntered = () => setStatus("View Less");

  const onExiting = () => setStatus("Closing...");

  const onExited = () => setStatus("View More");

  const toggle = () => {
    setCollapse(!collapse);

    if (collapse === false) {
      console.log("entra a if que ejecuta action");
      async function getActivities() {
        console.log("collaps");

        let response = await props.getActivities(props.itinerary._id);
        console.log(response);
        setActivitiesToRender(response.activities);
      }
      getActivities();
    }

    // props.cleanActivities();
  };
  console.log(activitiesToRender);
  let priceArray = [1, 2, 3, 4, 5];

  return (
    <div className="card-box-container">
      <div className="card-box-text-itinerary">
        <h2 className="itinerary-title">{props.itinerary.name}</h2>
        <h3>{props.itinerary.description}</h3>
        <div className="author">
          <img
            alt="Author"
            className="image"
            src={`/assets/img/${props.itinerary.author.photo}`}
          />
          <h2>{props.itinerary.author.name}</h2>
        </div>
        <div className="features">
          <span className="hashtags">
            {props.itinerary.hashtags.map((hashtag, index) => {
              return <p key={index}>{hashtag}</p>;
            })}
          </span>
          <span className="price">
            Price:
            {priceArray.slice(0, props.itinerary.price).map((index) => {
              return <i key={index} className="fad fa-money-bill-wave"></i>;
            })}
          </span>
          <span className="time">
            <i className="fal fa-clock"></i>
            {props.itinerary.duration}hs
          </span>
          <span>
            <i className="fal fa-heart"></i>
          </span>
        </div>
      </div>
      <div className="activitiesContainer">
        <Collapse
          isOpen={collapse}
          onEntering={onEntering}
          onEntered={onEntered}
          onExiting={onExiting}
          onExited={onExited}
        >
          <Card
            style={{
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <CardBody className="itineraryBody">
              <Activities activities={activitiesToRender} />
              <Comments />
            </CardBody>
          </Card>
        </Collapse>
        <Button
          color="primary"
          onClick={toggle}
          style={{ marginBottom: "1rem" }}
        >
          {status}
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  getActivities: itinerariesActions.getActivitiesByItinerary,
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);

// setCollapse(!collapse);

// if (collapse === false && props.activities.length) {
//   console.log("hola");
// }
// async function getActivities() {
//   console.log("collaps");

//   let response = await props.getActivities(props.itinerary._id);
//   console.log(response);
//   setActivitiesToRender(response.activities);
// }
// getActivities();
// props.cleanActivities();
