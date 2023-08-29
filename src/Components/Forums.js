import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const Forum = () => {
  const [forumPosts, setForumPosts] = useState([]);

  useEffect(() => {
    // Fetch forum posts from the backend API
    async function fetchForumPosts() {
      try {
        const response = await axios.get(`${API}/forums`);
        console.log(response.data);
        setForumPosts(response.data);
      } catch (error) {
        console.error('Error fetching forum posts:', error);
      }
    }

    fetchForumPosts();
  }, []);

  return (
    <div>
      <h2>Forum</h2>
      <ul>
        {forumPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Posted by: User ID {post.user_id}</p>
            <p>Date: {post.date}</p>
            <p>Category: {post.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forum;
