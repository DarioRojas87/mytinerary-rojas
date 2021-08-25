import { useState } from "react";
// import { Button } from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const Itinerary = (props) => {
  // const [show, setShow] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState("View More");

  const onEntering = () => setStatus("Opening...");

  const onEntered = () => setStatus("View Less");

  const onExiting = () => setStatus("Closing...");

  const onExited = () => setStatus("View More");

  const toggle = () => setCollapse(!collapse);

  let priceArray = [1, 2, 3, 4, 5];

  return (
    <div className="card-box-container">
      <div className="card-box">
        <div className="card-box-bg-img">
          <img
            className="card-box-img-desk"
            src={`/assets/img/${props.itinerary.cardPhoto}`}
            alt="placeholder"
          />
        </div>
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

          <Collapse
            isOpen={collapse}
            onEntering={onEntering}
            onEntered={onEntered}
            onExiting={onExiting}
            onExited={onExited}
          >
            <Card>
              <CardBody className="itineraryBody">
                <h2>UNDER CONSTRUCTION</h2>
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
          {/* <Button variant="primary" onClick={() => setShow(true)}>
            View More
          </Button>

          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-100w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Activities
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h1>UNDER CONSTRUCTION</h1>
            </Modal.Body>
          </Modal> */}
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
