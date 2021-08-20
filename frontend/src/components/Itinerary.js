import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const Itinerary = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="card-box-container">
      <div className="card-box">
        <div className="card-box-bg-img">
          <img
            className="card-box-img-desk"
            src={`/assets/img/exploreBruges.jpg`}
            alt="placeholder"
          />
        </div>
        <div className="card-box-text-itinerary">
          <h2 className="itinerary-title">{props.itinerary.name}</h2>
          <h3>{props.itinerary.description}</h3>
          <div className="author">
            <img
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
              {props.itinerary.price}
            </span>
            <span className="time">
              <i class="fal fa-clock"></i>
              {props.itinerary.duration}hs
            </span>
          </div>
          <Button variant="primary" onClick={() => setShow(true)}>
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
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
