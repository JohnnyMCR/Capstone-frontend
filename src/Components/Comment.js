import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditComment from './EditComment'; 

const API = process.env.REACT_APP_API_URL;

export default function Comment({ user, forum_id, forumContent }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [editingCommentId, setEditingCommentId] = useState(null);

    console.log(comments)

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

    const handleSubmitComment = (e) => {
        e.preventDefault()
        console.log(user)
        const actualNewComment = {
            content: newComment,
            user_id: user.id,
            forum_id,
            date: new Date().toLocaleDateString()
        }


        axios.post(`${API}/comments`, actualNewComment)
            .then((response) => {
                console.log(actualNewComment)
                console.log(response.data)
                const addedComment = {...response.data,username:user.username}

                setComments([...comments, addedComment]); 
                setNewComment('');
            })
            .catch((error) => {
                console.error('Error submitting comment:', error);
            });
    };

    useEffect(() => {
        axios.get(`${API}/forums/${forum_id}/comments`)
            .then((response) => {
                console.log(response.data)
                setComments(response.data);
            })
            .catch((e) => console.warn("Error fetching comments:", e));
    }, [forum_id]);

    return (
        <div className={`comment-section ${isExpanded ? 'expanded' : ''}`}>
            <div className="header" onClick={toggleExpand}>
                <span className="see-more-link has-text-link is-clickable pl-4">
                    {isExpanded ? 'See Less' : 'See More'}
                </span>
            </div>
            {isExpanded && (
                <div className="expanded-content pl-5 py-2">
                    <div className="post-content column is-three-quarter is-size-6 has-background-light has-text-dark">{forumContent}                    
                    </div>
                    <ul className='card has-background-info'>
                        {comments.map((comment, index) => (
                            <li key={index} className="comment-item mb-3 mt-2 py-1 has-text-dark">
                                <p>Posted by {comment.username}:</p>
                                {editingCommentId === comment.id ? (
                                    <EditComment
                                        comment={comment}
                                        user={user}
                                        onUpdateComment={handleUpdateComment}
                                        onCancel={handleCancelEdit}
                                    />
                                ) : (
                                    <div className='has-background-success py-3 px-3'>
                                        {comment.content}
                                        <button className="button is-primary is-rounded is-small is-pulled-right is-flex  has-text-weight-bold" onClick={() => handleEditClick(comment.id)}>
                                            Edit
                                        </button>
                                        
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className='comment-box pt-5'>
                        <textarea
                            className="textarea"
                            placeholder="Add your comment..."
                            value={newComment}
                            onChange={handleCommentChange}
                        />
                        <button className="button is-rounded has-text-weight-bold is-primary mt-3" onClick={handleSubmitComment}>
                            Submit Comment
                        </button>
                    </div>
                </div>
            )}
            </div>
    )}
            