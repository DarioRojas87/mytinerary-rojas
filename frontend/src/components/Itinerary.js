import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import Activities from "./Activities";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Comments from "./Comments";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";

const Itinerary = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState("View More");
  const [activitiesToRender, setActivitiesToRender] = useState([]);
  const [newComment, setNewComment] = useState({
    userId: "",
    comment: "",
    userPhoto: "",
    name: "",
    token: "",
    date: "",
  });

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const inputValue = (e) => {
    setNewComment({
      userId: props.user.id,
      comment: e.target.value,
      userPhoto: props.user.photoUrl,
      name: props.user.name,
      token: localStorage.getItem("token"),
      date: date,
    });
  };

  const onEntering = () => setStatus("Opening...");

  const onEntered = () => setStatus("View Less");

  const onExiting = () => setStatus("Closing...");

  const onExited = () => setStatus("View More");

  const toggle = () => {
    setCollapse(!collapse);

    if (collapse === false) {
      async function getActivities() {
        let response = await props.getActivities(props.itinerary._id);
        setActivitiesToRender(response.activities);
      }
      getActivities();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(newComment).some((value) => value === "")) {
      toast.error("You can't submit an empty comment!", {
        position: "top-center",
        autoClose: 3000,
      });
      return false;
    }
    let response = await props.addNewComment(newComment, props.itinerary._id);

    if (response.success) {
      async function getItineraries() {
        let response = await props.getItineraries(props.itinerary.cityId._id);
        if (response && response.error) {
        }
      }
      getItineraries();
      toast.success(`Your comment was published!`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setNewComment({
        userId: "",
        comment: "",
        userPhoto: "",
        name: "",
        token: "",
      });
    } else {
      toast.error(`You need to be logged in to submit a comment!`, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  let priceArray = [1, 2, 3, 4, 5];

  const tokenExist = localStorage.getItem("token");

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
              <Comments comments={props.itinerary.comments} />

              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Please leave a comment!</Form.Label>
                  {tokenExist ? (
                    <Form.Control
                      onChange={inputValue}
                      as="textarea"
                      rows={3}
                      value={newComment.comment}
                    />
                  ) : (
                    <Form.Control
                      onChange={inputValue}
                      as="textarea"
                      rows={3}
                      value="YOU MUST SIGN IN BEFORE SUBMIT NEW COMMENTS"
                      disabled
                    />
                  )}
                </Form.Group>
              </Form>

              {tokenExist ? (
                <Button onClick={handleSubmit} variant="outline-secondary">
                  Submit
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  variant="outline-secondary"
                  disabled
                >
                  Submit
                </Button>
              )}
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
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = {
  getActivities: itinerariesActions.getActivitiesByItinerary,
  addNewComment: itinerariesActions.addNewComment,
  getItineraries: itinerariesActions.getItinerariesByCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
