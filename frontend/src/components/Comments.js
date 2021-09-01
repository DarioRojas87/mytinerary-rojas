const Comments = () => {
  return (
    <div className="comments-section">
      <div className="comment-section">
        <div className="image-holder">
          <img
            src="https://img5.goodfon.com/wallpaper/nbig/5/45/grom-adskii-krik-world-of-warcraft-ork.jpg"
            alt="User"
          />
        </div>
        <div className="comment-desc">
          <div className="user-desv">
            <div className="userlinks">
              <span className="user-name"> USUARIO 1 </span>

              <span className="muted-txt"> posted 20 hours 33 min ago</span>
            </div>
            <div className="likes-sec">
              <i className="fas fa-edit"></i>
              <i className="fas fa-trash"></i>
            </div>
          </div>
          <p className="questions">I'm gonna try this. Thanks!</p>
        </div>
      </div>
      <div className="comment-section">
        <div className="image-holder">
          <img
            src="https://img5.goodfon.com/wallpaper/nbig/5/45/grom-adskii-krik-world-of-warcraft-ork.jpg"
            alt="User"
          />
        </div>
        <div className="comment-desc">
          <div className="user-desv">
            <div className="userlinks">
              <span className="user-name"> USUARIO 2 </span>

              <span className="muted-txt"> posted 20 hours 33 min ago</span>
            </div>
            <div className="likes-sec">
              <i className="fas fa-edit"></i>
              <i className="fas fa-trash"></i>
            </div>
          </div>
          <p className="questions">This is pretty nice!</p>
        </div>
      </div>
      <div className="comment-section">
        <div className="image-holder">
          <img
            src="https://img5.goodfon.com/wallpaper/nbig/5/45/grom-adskii-krik-world-of-warcraft-ork.jpg"
            alt="User"
          />
        </div>
        <div className="comment-desc">
          <div className="user-desv">
            <div className="userlinks">
              <span className="user-name"> USUARIO 3 </span>

              <span className="muted-txt"> posted 20 hours 33 min ago</span>
            </div>
            <div className="likes-sec">
              <i className="fas fa-edit"></i>
              <i className="fas fa-trash"></i>
            </div>
          </div>
          <p className="questions">This looks pretty awesome!!</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
