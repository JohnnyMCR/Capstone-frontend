// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import EditComment from './EditComment';
// import { AuthContext } from './AuthContext';

// const API = process.env.REACT_APP_API_URL;

// export default function CommentModal({ forum_id, forumContent, isOpen, onClose }) {
//     const { currentUser, auth } = useContext(AuthContext);
//     console.log(auth)
//     const [comments, setComments] = useState([]);
//     const [newComment, setNewComment] = useState('');
//     const [editingCommentId, setEditingCommentId] = useState(null);

//     const handleCommentChange = (event) => {
//         setNewComment(event.target.value);
//     };

//     const handleEditClick = (commentId) => {
//         setEditingCommentId(commentId);
//     };

//     const handleCancelEdit = () => {
//         setEditingCommentId(null);
//     };

//     const handleUpdateComment = (updatedComment) => {
//         const updatedComments = comments.map((comment) => {
//             if (comment.id === updatedComment.id) {
//                 return updatedComment;
//             }
//             return comment;
//         });
//         setComments(updatedComments);
//         setEditingCommentId(null);
//     };

//     const handleSubmitComment = (e) => {
//         e.preventDefault();

//         if (currentUser) {
//             const actualNewComment = {
//                 content: newComment,
//                 user_id: currentUser.id,
//                 forum_id,
//                 date: new Date().toLocaleDateString(),
//             };

//             axios
//                 .post(`${API}/comments`, actualNewComment)
//                 .then((response) => {
//                     console.log(actualNewComment);
//                     console.log(response.data);

//                     const addedComment = { ...response.data, username: currentUser.username };

//                     setComments([...comments, addedComment]);
//                     setNewComment('');
//                 })
//                 .catch((error) => {
//                     console.error('Error submitting comment:', error);
//                 });
//         } else {
//             console.error('currentUser is not defined');
//         }
//     };

//     useEffect(() => {
//         axios
//             .get(`${API}/forums/${forum_id}/comments`)
//             .then((response) => {
//                 console.log(response.data);
//                 setComments(response.data);
//             })
//             .catch((e) => console.warn('Error fetching comments:', e));
//     }, [forum_id]);

//     return (
//         <section className="modal-card-body has-background-info">
//     <div className="columns">
//         <div className="column is-three-quarters">
//             <h1 className="title is-4 has-text-primary has-text-left">Comments</h1>
//             <ul className="comment-list">
//                 {comments.map((comment, index) => (
//                     <li key={index} className="comment-item">
//                         <p>
//                             <strong>{comment.username}</strong> said:
//                         </p>
//                         {editingCommentId === comment.id ? (
//                             <EditComment
//                                 comment={comment}
//                                 currentUser={currentUser}
//                                 onUpdateComment={handleUpdateComment}
//                                 onCancel={handleCancelEdit}
//                             />
//                         ) : (
//                             <div>
//                                 <p>{comment.content}</p>
//                                 {currentUser && currentUser.id === comment.user_id && (
//                                     <button
//                                         className="button is-primary is-small"
//                                         onClick={() => handleEditClick(comment.id)}
//                                     >
//                                         Edit
//                                     </button>
//                                 )}
//                             </div>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//             <div className="comment-box">
//                 <textarea
//                     className="textarea"
//                     placeholder="Add your comment..."
//                     value={newComment}
//                     onChange={handleCommentChange}
//                 />
//                 <button
//                     className="button is-rounded has-text-weight-bold is-primary mt-3"
//                     onClick={handleSubmitComment}
//                 >
//                     Submit Comment
//                 </button>
//             </div>
//         </div>
//         <div className="column">
//         </div>
//     </div>
// </section>
//     )}
