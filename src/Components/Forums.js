import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ForumForm from './ForumForm';

const API = process.env.REACT_APP_API_URL;

const Forums = () => {
  const [forums, setForums] = useState([]);

  useEffect(() => {
    async function fetchForums() {
      try {
        const response = await axios.get(`${API}/forums`);
        console.log('API response:', response.data);
        setForums(response.data);
      } catch (error) {
        console.error('Error fetching forums:', error);
      }
    }

    fetchForums();
  }, []);

  const handleNewForum = (newForum) => {
    setForums([...forums, newForum]); // Add the new forum post to the list
  };

  return (
    <div>
      <h2>Forums</h2>
      <ForumForm onNewForum={handleNewForum} /> {/* Pass the handler */}
      <ul>
        {forums.map(forum => (
          <li key={forum.id}>
            <h3>{forum.title}</h3>
            <p>Category: {forum.category}</p>
            <p>Posted by: User ID {forum.user_id}</p>
            <p>Date: {forum.date}</p>
            <p>{forum.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forums;
