// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import EditComment from './EditComment'; 

// const API = process.env.REACT_APP_API_URL;

// export default function Comment({ user }) {
//     const [comments, setComments] = useState([]);
//     const [newComment, setNewComment] = useState('');
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [editingCommentId, setEditingCommentId] = useState(null);

//     const toggleExpand = () => {
//         setIsExpanded(!isExpanded);
//     };

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

//     const handleSubmitComment = () => {
//         axios.post(`${API}/comments`, { content: newComment })
//             .then((response) => {
//                 setComments([...comments, response.data]); 
//                 setNewComment('');
//             })
//             .catch((error) => {
//                 console.error('Error submitting comment:', error);
//             });
//     };

//     useEffect(() => {
//         axios.get(`${API}/comments`)
//             .then((response) => {
//                 setComments(response.data);
//             })
//             .catch((e) => console.warn("Error fetching comments:", e));
//     }, []);

//     useEffect(() => {
//         if (user) {
//           axios
//             .get(`${API}/profiles`)
//             .then((response) => {
//               console.log('API Response:', response.data);
//               response.data.forEach(element => {
//                 if (element.username === user.displayName) {
//                   setCurUser(element.id)
//                 }
                
//               });
//             })
//             .catch((error) => {
//               console.error('Error fetching username:', error);
//               setCurUser('Error fetching username');
//             });
//         } else {
//           setCurUser('Profile ID not defined');
//         }
//       },[user ,API]);

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
//                     </div>
//                     <ul>
//                         {comments.map((comment, index) => (
//                             <li key={index} className="comment-item mb-3">
//                                 <p>Posted by {user.displayName}:</p>
//                                 {editingCommentId === comment.id ? (
//                                     <EditComment
//                                         comment={comment}
//                                         onUpdateComment={handleUpdateComment}
//                                         onCancel={handleCancelEdit}
//                                     />
//                                 ) : (
//                                     <div>
//                                         {comment.content}
//                                         <div className="is-pulled-right">
//                                         <button className="button is-primary is-small mt-1" onClick={() => handleEditClick(comment.id)}>
//                                             Edit
//                                         </button>
//                                         </div>
//                                     </div>
//                                 )}
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
//                         <button className="button is-primary mt-3" onClick={handleSubmitComment}>
//                             Submit Comment
//                         </button>
//                     </div>
//                 </div>
//             )}
//             </div>
//     )}
                                
  
  
  
//   {/* return (
//     <div className={`comment-section ${isExpanded ? 'expanded' : ''}`}>
//       <div className="header" onClick={toggleExpand}>
//         <span className="see-more-link has-text-link ml-4">
//           {isExpanded ? 'See Less' : 'See More'}
//         </span>
//       </div>
//       {isExpanded && (
//         <div className="expanded-content pt-3 px-3">
//           <div className="post-content column is-three-quarter is-size-6 has-background-light">
//             <p className='py-3 px-3 has-text-dark'>{initialContent}</p>
//           </div>
//           <ul>
//             {comments.map((comment, index) => (
//               <li key={index} className="comment-item mb-3">
//                 {comment.content}
//               </li>
//             ))}
//           </ul>
//           <div className="comment-box pt-3">
//             <textarea
//               className="textarea"
//               placeholder="Add your comment..."
//               value={newComment}
//               onChange={handleCommentChange}
//             />
//             <button className="button is-primary mt-3 is-rounded">Submit Comment</button>
//           </div>
//         </div>
//     )
// } */}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditComment from './EditComment';

const API = process.env.REACT_APP_API_URL;

export default function Comment({ user }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [userProfiles, setUserProfiles] = useState([]);

    function getUserDisplayName(userId) {
        const userProfile = userProfiles.find((profile) => profile.id === userId);
        return userProfile ? userProfile.displayName : 'Unknown';
    }

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleEditClick = (commentId) => {
        setEditingCommentId(commentId);
    };

    const handleCancelEdit = () => {
        setEditingCommentId(null);
    };

    const handleUpdateComment = (updatedComment) => {
        const updatedComments = comments.map((comment) => {
            if (comment.id === updatedComment.id) {
                return updatedComment;
            }
            return comment;
        });
        setComments(updatedComments);
        setEditingCommentId(null);
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
            .catch((e) => {
                console.warn('Error fetching comments:', e);
            });
    }, []);

    useEffect(() => {
        if (user) {
            axios.get(`${API}/profiles`)
                .then((response) => {
                    setUserProfiles(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching user profiles:', error);
                });
        }
    }, [user]);


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
                                <p>Posted by {getUserDisplayName(comment.userId)}</p>
                                {editingCommentId === comment.id ? (
                                    <EditComment
                                        comment={comment}
                                        onUpdateComment={handleUpdateComment}
                                        onCancel={handleCancelEdit}
                                    />
                                ) : (
                                    <div>
                                        {comment.content}
                                        <div className="is-pulled-right">
                                        <button className="button is-primary is-small mt-1" onClick={() => handleEditClick(comment.id)}>
                                            Edit
                                        </button>
                                        </div>
                                    </div>
                                )}                            </li>
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
)};

