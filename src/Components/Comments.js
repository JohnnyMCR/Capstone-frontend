import axios from "axios";
import { useState, useEffect } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const API = process.env.REACT_APP_API_URL;

function Comments() {
  const [showAddComment, setShowAddComment] = useState(false);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const auth = getAuth();
  const [user_id, setUser_id] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser_id(user.uid);
      } else {
        setUser_id(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  useEffect(() => {
    axios.get(`${API}/forums/${id}/comments`)
      .then((res) => {
        console.log("Fetched Comments:", res.data);
        setComments(res.data);
      })
      .catch((err) => {
        console.error("Error fetching comments:", err);
      });
  }, [id]);

  const handleClick = () => {
    setShowAddComment(!showAddComment);
  };

  const handleAddComment = (newComment) => {
    axios
      .post(`${API}/forums/${id}/comments`, newComment)
      .then((res) => {
        console.log("Added Comment Response:", res.data);
        setComments([res.data, ...comments]);
      })
      .catch((err) => {
        console.error("Error adding comment:", err);
      });
  };

  const handleDeleteComment = (commentId) => {
    axios
      .delete(`${API}/forums/${id}/comments/${commentId}`)
      .then((res) => {
        const updatedComments = comments.filter(
          (comment) => comment.id !== commentId
        );
        setComments(updatedComments);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSubmitComment = (updatedComment) => {
    axios
      .put(`${API}/forums/${id}/comments/${updatedComment.id}`, updatedComment)
      .then((res) => {
        const updatedComments = comments.map((comment) =>
          comment.id === updatedComment.id ? res.data : comment
        );
        setComments(updatedComments);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log('Comment Update Request Sent:', updatedComment);
  };


  return (
    <section className="Comments">
      <button onClick={handleClick}>
        {showAddComment ? "Hide Form" : "Add New Comment"}
      </button>
      {showAddComment && (
        <CommentForm
          handleAddComment={handleAddComment}
          user_id={user_id}
        >
          <h5>Add a New Comment</h5>
        </CommentForm>
      )}
      {comments.slice().reverse().map((comment) => (
        <div key={comment.id}>
          <Comment
            comment={comment}
            handleSubmitComment={handleSubmitComment}
            handleDeleteComment={() => handleDeleteComment(comment.id)}
          />
        </div>
      ))}
    </section>
  );
}

export default Comments;
