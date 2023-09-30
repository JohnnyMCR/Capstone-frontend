import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function Comment() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleSubmitComment = () => {
        axios.post(`${API}/comments`, { content: newComment })
            .then((response) => {
                setComments([...comments, response.data]); 
                setNewComment(''); 
            })
            .catch((error) => {
                console.error('Error submitting comment:', error);
            });
    };

    useEffect(() => {
        axios.get(`${API}/comments`)
            .then((response) => {
                setComments(response.data);
            })
            .catch((e) => console.warn("catch", e));
    }, []);

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
                    </div>
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={index} className="comment-item mb-3">
                                {comment.content}
                            </li>
                        ))}
                    </ul>
                    <div className='comment-box'>
                        <textarea
                            className="textarea"
                            placeholder="Add your comment..."
                            value={newComment}
                            onChange={handleCommentChange}
                        />

                        <button className="button is-primary mt-3" onClick={handleSubmitComment}>
                            Submit Comment
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
  


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