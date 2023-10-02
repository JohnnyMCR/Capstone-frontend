import React, { useState, } from 'react';
import axios from 'axios';

export default function ForumModal({ isOpen, onClose ,user, forums, setForums })
{
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const API = process.env.REACT_APP_API_URL;


  const handleSubmit = (e) => {
    e.preventDefault();
    const newForum = {
      user_id: user.id,
      title,
      content,
      category,
      date: new Date().toLocaleDateString(),
    };

    console.log(user)

    axios
      .post(`${API}/forums`, newForum)
      .then((res) => {
        console.log('Form submitted successfully:', res.data);
        const addedForum = {...res.data,username:user.username}
        const newForumsArray = [...forums, addedForum]
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
                  className="button is-medium mt-4 is-outlined is-primary is-rounded has-text-primary has-text-left has-text-weight-bold"
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
                      className="button is-medium is-rounded is-primary mt-3 has-text-weight-bold"
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
