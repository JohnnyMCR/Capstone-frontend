import React, { useState, useEffect } from "react";
import Comment from './Comment';
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function ForumCard({ forum }) {
    const [userName, setUserName] = useState(null);
    console.log(forum)

    useEffect(() => {
      if (forum.profile_id) {
        axios
          .get(`${API}/profiles/${forum.profile_id}`)
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
        setUserName('Profile ID not defined');
      }
    }, [forum.profile_id]); 

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
                            <Comment initialContent={['Cum sociis natoque penatibus et magnis. Maecenas sed enim ut sem viverra aliquet eget sit. Eget sit amet tellus cras adipiscing enim eu turpis. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Ut eu sem integer vitae justo eget magna fermentum iaculis. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Non blandit massa enim nec dui nunc mattis enim ut. Integer quis auctor elit sed vulputate mi sit amet mauris. Sem et tortor consequat id. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Purus non enim praesent elementum. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet.']} initialComments={['Comment 1', 'Comment 2']} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
