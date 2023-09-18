import React, { useState } from 'react';

export default function ForumModal({ isOpen, onClose, onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, category: setCategory });
    setTitle('');
    setContent('');
    setCategory('')
    onClose();
  };

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
                  type="text"
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
                    <option value="teen">Teen</option>
                    <option value="health">Health</option>
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