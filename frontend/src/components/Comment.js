const Comment = (props) => {
  return (
    <>
      <div className="comment-section">
        <div className="image-holder">
          <img src={props.comment.userPhoto} alt="User" />
        </div>
        <div className="comment-desc">
          <div className="user-desv">
            <div className="userlinks">
              <span className="user-name"> {props.comment.name} </span>

              <span className="muted-txt"> {props.comment.date}</span>
            </div>
            <div className="likes-sec">
              <i className="fas fa-edit"></i>
              <i className="fas fa-trash"></i>
            </div>
          </div>
          <p className="questions">{props.comment.comment}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
