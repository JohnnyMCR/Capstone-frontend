import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";

const API = process.env.REACT_APP_API_URL;

export default function Comment({ comment, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch(`${API}/profiles/${comment.user_id}`);
        const data = await response.json();
        setUsername(data.username);
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchUsername();
  }, [comment.user_id]);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div className="Comment">
      <br />
      <br />
      <button onClick={toggleView}>Edit this comment...</button>
      <br />
      <br />
      {viewEditForm ? (
        <CommentForm
          commentDetails={comment}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div>
          <p>{username}</p>
          <p>{comment.content}</p>
        </div>
      )}
    </div>
  );
}
