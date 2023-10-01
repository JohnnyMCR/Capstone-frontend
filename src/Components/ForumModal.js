import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ForumModal({ isOpen, onClose ,user, forums, setForums })
{
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [curUser, setCurUser] = useState(null);

  const API = process.env.REACT_APP_API_URL;

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newForum = {
      user_id: curUser,
      title,
      content,
      category,
      date: new Date().toLocaleDateString(),
    };

    axios
      .post(`${API}/forums`, newForum)
      .then((res) => {
        console.log('Form submitted successfully:', res.data);
        const newForumsArray = [...forums, res.data]
        setForums(newForumsArray)
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
        .get(`${API}/users`)
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
      setCurUser('User ID not defined');
    }
  },[user ,API]);

  console.log(curUser)
  return (
    <div className={`modal ${isOpen ? "is-active" : ""}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content ">
        <div className="box has-background-info">
          <div className="columns px-3 py-3">
            <h1 className="modal-card-title title is-2 has-text-primary has-text-left">
              New Forum Post
            </h1>
            <button
              className="delete"
              aria-label="close"
              onClick={onClose}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="field">
              {/* <label className="label is-large has-text-danger">Title</label> */}
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter forum title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              {/* <label className="label is-large has-text-danger">Content</label> */}
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Enter forum content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <div className="field">
              {/* <label className="label is-large has-text-danger">Category</label> */}
              <div className="control">
                <div className="select">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="">Select A Category</option>
                    <option value="baby">Baby</option>
                    <option value="adolescents">Adolescents</option>
                    <option value="teen">Teen</option>
                    <option value="health">Health</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column has-text-left">
                <button
                  className="button is-medium mt-4 is-outlined is-primary is-rounded has-text-primary has-text-left"
                  aria-label="close"
                  onClick={onClose}
                  style={{
                    boxShadow: "none",
                    backgroundColor: "white",
                    color: "inherit",
                  }}
                >
                  Cancel
                </button>
              </div>
              <div className="column has-text-right">
                <div className="field">
                  <div className="control">
                    <button
                      className="button is-medium is-rounded is-primary mt-3"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
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
