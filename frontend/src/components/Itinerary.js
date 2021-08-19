const Itinerary = (props) => {
  return (
    <div className="card-box-container">
      <div className="card-box">
        <div className="card-box-bg-img">
          <img
            className="card-box-img-desk"
            src="http://assets.stickpng.com/images/5a576ab91c992a034569ab78.png"
            alt="placeholder"
          />
        </div>
        <div className="card-box-text-itinerary">
          <h2 className="itinerary-title">ITINERARY NAME</h2>
          <h3>DESCRIPTION </h3>
          <div className="author">
            <div class="circle">
              <div class="image"></div>
            </div>
            <h2>Author Name</h2>
          </div>
          <div className="features">
            <span className="hashtags">#placeholder</span>
            <span className="price">Price: &#x1F4B5;&#x1F4B5;&#x1F4B5;</span>
            <span className="time">&#x1F558;3.5 Hours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
