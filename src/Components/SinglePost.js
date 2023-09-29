// // // Api call that maps through the comments for that post

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// const API = process.env.REACT_APP_API_URL;

// export default function SinglePost({ initialContent }) {

//     const [comments, setComments] = useState([]);
//     const [newComment, setNewComment] = useState('');
//     const [isExpanded, setIsExpanded] = useState(false);

//     const toggleExpand = () => {
//         setIsExpanded(!isExpanded);
//     };

//     const handleCommentChange = (event) => {
//         setNewComment(event.target.value);
//         console.log('comment has been submitted:', event.target.value);
//     };
//     useEffect(() => {
//         axios.get(`${API}/comments`)
//             .then((response) => {
//                 setComments(response.data);
//             })
//             .catch((e) => console.warn("catch", e));
//     }, []);

      

//     return (
//         <div className={`comment-section ${isExpanded ? 'expanded' : ''}`}>
//             <div className="header" onClick={toggleExpand}>
//                 <span className="see-more-link has-text-link">
//                     {isExpanded ? 'See Less' : 'See More'}
//                 </span>
//             </div>
//             {isExpanded && (
//                 <div className="expanded-content">
//                     <div className="post-content column is-three-quarter is-size-6 has-background-light">
//                         <p>{initialContent}</p>
//                     </div>
//                     <ul>
//                         {comments.map((comment, index) => (
//                             <li key={index} className="comment-item mb-3">
//                                 {comment.content}
//                             </li>
//                         ))}
//                     </ul>
//                     <div className='comment-box'>
//                         <textarea
//                             className="textarea"
//                             placeholder="Add your comment..."
//                             value={newComment}
//                             onChange={handleCommentChange}
//                         />

//                         <button className="button is-primary mt-3">
//                             Submit Comment
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// }

//     return (
//         <div className={`comment-section ${isExpanded ? 'expanded' : ''}`}>
//             <div className="header" onClick={toggleExpand}>
//                 <span className="see-more-link has-text-link ">
//                     {isExpanded ? 'See Less' : 'See More'}
//                 </span>
//             </div>
//             {isExpanded && (
//                 <div className="expanded-content">
//                     <div className="post-content column is-three-quarter is-size-6 has-background-light has-text-dark">
//                         <p>{initialContent}</p>
//                     </div>
//                     <ul>
//                         {comments.map((comment, index) => (
//                             <li key={index} className="comment-item mb-3 has-background-warning pl-3 has-text-dark">
//                                 {comment.content}
//                             </li>
//                         ))}
//                     </ul>
//                     <div className='comment-box'>
//                         <textarea
//                             className="textarea"
//                             placeholder="Add your comment..."
//                             value={newComment}
//                             onChange={handleCommentChange}
//                         />

//                         <button className="button is-primary mt-3">
//                             Submit Comment
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// }


