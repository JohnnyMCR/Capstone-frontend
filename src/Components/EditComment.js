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
                className="textarea my-1"
                placeholder="Edit your comment..."
                value={editedContent}
                onChange={handleContentChange}
            />
            <div className="edit-comment-buttons my-2">
                <button className="button is-primary is-rounded has-text-weight-bold mx-2" onClick={handleUpdateComment}>
                    Save
                </button>
                <button className="button is-danger is-rounded has-text-weight-bold" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
}
