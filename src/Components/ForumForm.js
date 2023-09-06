import React, { useState } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const ForumForm = ({ user, onForumPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        title,
        content,
        userId: user.id,
        username: user.username,
      };

      const response = await axios.post(`${API}/forums`, postData);
      if (response.status === 200) {
        setTitle('');
        setContent('');
        onForumPostCreated(); 
        console.log('Submit button clicked. Post created successfully.');
      } else {
        console.error('Error creating the post:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting the post:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <p>Welcome, {user.username}!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForumForm;
