import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ForumModal({ isOpen, onClose ,user})
{
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [curUser, setCurUser] = useState(null);

  const API = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newForum = {
      profile_id: curUser,
      title,
      content,
      category,
      date: new Date().toLocaleDateString(),
    };

    axios
      .post(`${API}/forums`, newForum)
      .then(() => {
        console.log('Form submitted successfully:', newForum);
        navigate('/forums');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    
    setTitle('');
    setContent('');
    setCategory('');
    onClose();
  };

  useEffect(() => {
    if (user) {
      axios
        .get(`${API}/profiles`)
        .then((response) => {
          console.log('API Response:', response.data);
          response.data.forEach(element => {
            if (element.username === user.displayName) {
              setCurUser(element.id)
            }
            
          });
        })
        .catch((error) => {
          console.error('Error fetching username:', error);
          setCurUser('Error fetching username');
        });
    } else {
      setCurUser('Profile ID not defined');
    }
  },[user ,API]);

  console.log(curUser)
  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content ">
        <div className="box has-background-info">
          <h1 className="title is-1 has-text-primary">New Forum Post</h1>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label is-large has-text-danger">Title</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Enter post title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label is-large has-text-danger">Content</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Enter post content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label is-large has-text-danger">Category</label>
              <div className="control">
                <div className="select">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="baby">Baby</option>
                    <option value="adolescents">Adolescents</option>
                    <option value="teen">Expecting</option>
                    <option value="health">Newborn</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      ></button>
    </div>
  );
}

