// Api call that maps through the comments for that post

import React, { useState } from 'react';


export default function SinglePost({ initialComments, initialContent }) {

    const [comments, setComments] = useState(initialComments);
    // const [content, setContent] = useState(initialContent)
    const [newComment, setNewComment] = useState('');

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

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
                                {comment}
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

                        <button className="button is-primary mt-3">
                            Submit Comment
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}