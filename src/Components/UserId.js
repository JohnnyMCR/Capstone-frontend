import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const UserId = ({ id }) => {
  const [username, setUsername] = useState('');
  const [isLoading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/profiles/${id}`);
        console.log('API Response:', response);

        if (response.status === 200) {
          setUsername(response.data.username);
        } else {
          console.error('Failed to fetch username. Status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching username:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [id]);

  console.log('Rendered UserId component. Username:', username);

  return (
    <div>
      {isLoading || username === undefined ? ( 
        <p>Loading...</p>
      ) : (
        <p><strong>{username}</strong></p>
      )}
    </div>
  );
};

export default UserId;
