// import { useState, useEffect } from "react";
// import CommentForm from "./CommentForm";

// const API = process.env.REACT_APP_API_URL;

// function Comment({ comment, handleSubmit }) {
//   const [viewEditForm, toggleEditForm] = useState(false);
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     const fetchUsername = async () => {
//       try {
//         const response = await fetch(`${API}/profiles/${comment.user_id}`);
//         const data = await response.json();
//         setUsername(data.username);
//       } catch (error) {
//         console.error("Error fetching username:", error);
//       }
//     };

//     fetchUsername();
//   }, [comment.user_id]);

//   const toggleView = () => {
//     toggleEditForm(!viewEditForm);
//   };

//   return (
//     <div className="Comment">
//       <br />
//       <br />
//       <button onClick={toggleView}>Edit this comment...</button>
//       <br />
//       <br />
//       {viewEditForm ? (
//         <CommentForm
//           commentDetails={comment}
//           toggleView={toggleView}
//           handleSubmit={handleSubmit}
//         />
//       ) : (
//         <div>
//           <p>{username}</p>
//           <p>{comment.content}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Comment;

// Api call that maps through the comments for that post

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function Comment({ initialContent, postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
    console.log('Comment has been submitted:', event.target.value);
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${API}/forums/${postId}/comments`); 
        if (response.status === 200) {
          setComments(response.data);
        } else {
          console.error('Failed to fetch comments. Status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <div className={`comment-section ${isExpanded ? 'expanded' : ''}`}>
      <div className="header" onClick={toggleExpand}>
        <span className="see-more-link has-text-link">
          {isExpanded ? 'See Less' : 'See More'}
        </span>
      </div>
      {isExpanded && (
        <div className="expanded-content">
          <div className="post-content column is-three-quarter is-size-6 has-background-light">
            <p>{initialContent}</p>
          </div>
          <ul>
            {comments.map((comment, index) => (
              <li key={index} className="comment-item mb-3">
                {comment.content}
              </li>
            ))}
          </ul>
          <div className="comment-box">
            <textarea
              className="textarea"
              placeholder="Add your comment..."
              value={newComment}
              onChange={handleCommentChange}
            />
            <button className="button is-primary mt-3">Submit Comment</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comment;



