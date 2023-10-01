import React, { useState } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function EditComment({ comment, onUpdateComment, onCancel }) {
    const [editedContent, setEditedContent] = useState(comment.content);

    const handleContentChange = (event) => {
        setEditedContent(event.target.value);
    };

    const handleUpdateComment = () => {
        axios.put(`${API}/comments/${comment.id}`, { content: editedContent })
            .then((response) => {
                onUpdateComment(response.data); 
            })
            .catch((error) => {
                console.error('Error updating comment:', error);
            });
    };

    return (
        <div className="edit-comment">
            <textarea
                className="textarea"
                placeholder="Edit your comment..."
                value={editedContent}
                onChange={handleContentChange}
            />
            <div className="edit-comment-buttons">
                <button className="button is-primary" onClick={handleUpdateComment}>
                    Save
                </button>
                <button className="button is-danger" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
}
