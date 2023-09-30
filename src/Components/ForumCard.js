import React, { useState, useEffect } from "react";
import Comments from './Comment';
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function ForumCard({ forum ,user }) {
    const [userName, setUserName] = useState(null);

    useEffect(() => {
      if (forum.user_id) {
        axios
          .get(`${API}/profiles/${forum.user_id}`)
          .then((response) => {
            console.log('API Response:', response.data);
            if (response.data && response.data.username) {
              setUserName(response.data.username);
            } else {
              setUserName('Username not found');
            }
          })
          .catch((error) => {
            console.error('Error fetching username:', error);
            setUserName('Error fetching username');
          });
      } else {
        setUserName('User ID not defined');
      }
    }, [forum.user_id]); 

    return (
        <div className="column">
            <div className="card mb-5">
                <div className="card-content">
                    <div className='columns'>
                        <div className='column has-text-left is-full has-background-info'>
                            <h1 className='column is-one-quarter is-size-4 has-background-warning'>{forum.title}</h1>
                            <span className='column is-one-quarter is-size-6 has-background-primary'>{forum.date}</span>
                            <p className='column is-one-quarter is-size-6 has-background-danger'>{userName}</p>
                            <p className='column is-one-quarter is-size-6 has-background-light'>{forum.category}</p>
                            <p className='column is-one-quarter is-size-6 has-background-dark'>{forum.content}</p>
                            <Comments user={user}  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
