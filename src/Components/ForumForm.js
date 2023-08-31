import React, { useState } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const ForumForm = ({ onNewForum }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}/forums`, {
        title,
        content,
        category,
        user_id: 1, 
        date: new Date().toISOString().split('T')[0], // Get the current date
      });

      console.log('New forum posted:', response.data);

      // Clear the form fields after posting
      setTitle('');
      setContent('');
      setCategory('');

      onNewForum(response.data); // Call the handler with the new forum data
    } catch (error) {
      console.error('Error posting forum:', error);
    }
  };

  return (
    <div>
      <h3>Post on the Forum</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default ForumForm;
