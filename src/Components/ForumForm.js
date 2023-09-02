//needs to be fixed

import React, { useState } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const ForumForm = ({ user, onNewForum }) => {
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
        user_id: user.id,
        date: new Date().toISOString().split('T')[0],
      });

      console.log('New forum posted:', response.data);

      setTitle('');
      setContent('');
      setCategory('');

      onNewForum(response.data);
    } catch (error) {
      console.error('Error posting forum:', error);
    }
  };

  return (
    <div>
      <h3>Post on the Forum</h3>
      <form onSubmit={handleSubmit}>
        {/* ... Form input fields ... */}
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default ForumForm;
