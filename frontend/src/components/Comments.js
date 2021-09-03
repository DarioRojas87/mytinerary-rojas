import Comment from "./Comment";

const Comments = (props) => {
  return (
    <div className="comments-section">
      {props.comments.map((comment) => {
        return <Comment key={comment._id} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
