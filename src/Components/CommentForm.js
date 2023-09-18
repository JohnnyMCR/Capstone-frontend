import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function CommentForm(props) {
  const { id } = useParams();
  const auth = getAuth();

  const [comment, setComment] = useState({
    date: "",
    content: "",
    user_id: "",
    username: "",
    post_id: id,
  });

  useEffect(() => {
    if (props.commentDetails) {
      setComment(props.commentDetails);
    }
  }, [props.commentDetails]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setComment((prevComment) => ({
          ...prevComment,
          content:"",
          user_id: user.uid,
          username: user.displayName,
        }));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  const handleTextChange = (event) => {
    setComment((prevComment) => ({
      ...prevComment,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Comment Form submitted!");
     
    const currentDate = new Date().toISOString().split('T')[0];
  setComment((prevComment) => ({
    ...prevComment,
    date: currentDate, 
  }));

    if (props.handleAddComment) {
      const { date, ...commentWithoutDate } = comment;
      props.handleAddComment(commentWithoutDate);
    } else if (props.handleEditComment) {
      props.handleEditComment(comment);
    }

    if (props.toggleView) {
      props.toggleView();
    }

    setComment({
      date: "",
      content: "",
      user_id: "",
      username: "",
      post_id: id,
    });
  };

  return (
    <div>
      {props.children}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="content">Comment: </label>
          <input
            id="content"
            type="text"
            value={comment.content}
            onChange={handleTextChange}
            placeholder="Your comment"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_id">Username: </label>
          <input
            id="user_id"
            value={comment.username}
            readOnly
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date: </label>
          <input
            id="date"
            type='date'
            className="form-control"
            required
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

export default CommentForm;
