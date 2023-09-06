import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ForumForm from './ForumForm';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const API = process.env.REACT_APP_API_URL;

const Forums = () => {
  const [forums, setForums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const fetchForumData = useCallback(() => {
    axios
      .get(`${API}/forums`)
      .then((response) => {
        setForums(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching forums data:', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    initializeApp(firebaseConfig);

    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const user = {
          id: authUser.uid,
          username: authUser.displayName,
        };

        setUser(user);
        fetchForumData();
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [fetchForumData]);

  const handleForumPostCreated = () => {
    console.log('Refreshing forum data...');
    fetchForumData();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Forum Posts</h1>
      <ul>
        {forums.map((forum) => (
          <li key={forum.id}>
            <h2><strong>{forum.title}</strong></h2>
            <p>{forum.content}</p>
            <p>Category: {forum.category}</p>
            {/* Render additional forum information */}
          </li>
        ))}
      </ul>
      {user && (
        <ForumForm user={user} onForumPostCreated={handleForumPostCreated} />
      )}
    </div>
  );
};

export default Forums;
