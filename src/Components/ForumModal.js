import React from 'react';

function ForumModal({ isOpen, onClose, onSubmit, forum, handleTextChange, handleDateChange }) {
  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background " onClick={onClose}></div>
      <div className="modal-content">
        <div className="box has-background-info">
          <h1 className="title has-text-primary">New Post</h1>
          <form onSubmit={onSubmit}>
            <div className="field">
              <label className="label is-large has-text-danger">Title</label>
              <div className="control">
                <input
                  id="title"
                  className="input"
                  type="varchar"
                  placeholder="Enter post title"
                  value={forum.title}
                  onChange={handleTextChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label is-large has-text-danger">Content</label>
              <div className="control">
                <textarea
                  id='content'
                  type='text'
                  className="textarea"
                  placeholder="Enter post content"
                  value={forum.content}
                  onChange={handleTextChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label is-large has-text-danger">Category</label>
              <div className="control">
                <div className="select">
                  <select
                    id="category"
                    type="varchar"
                    value={forum.category}
                    onChange={handleTextChange}
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
              <label className="label is-large has-text-danger">Date</label>
              <div className="control">
                <input
                  className="input"
                  type="date"
                  value={forum.date}
                  onChange={handleDateChange}
                  required
                />
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

export default ForumModal;