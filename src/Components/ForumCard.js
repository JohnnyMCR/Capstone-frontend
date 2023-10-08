import Comments from './Comment'
import React, { useState } from 'react';

export default function ForumCard({ forum, user }) {
  const [forumContent, setForumContent] = useState(forum.content.slice(0, 108));

  // Callback function to update forum content
  const updateContent = (newContent) => {
    setForumContent(forum.content);
  };

  return (
    <div className="column">
      <div className="card mb-5">
        <div className="card-content has-background-info">
          <div className='columns'>
            <div className='column has-text-left is-full'>
              <h1 className='title has-text-dark' style={{ marginLeft: '10px' }}>{forum.title}</h1>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Generic Circular Placeholder"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    backgroundColor: '#333'
                  }}
                />
                <p className='is-size-6 has-text-dark ml-5'>{forum.username}</p>
                <span className='is-size-6 has-text-dark ml-5'>{forum.date}</span>
              </div>
              <span className='column is full is-size 6 has-text-dark'>{forumContent}</span>
              <Comments user={user} forum_id={forum.id} forum={forum} forumContent={forum.content} updateForumContent={updateContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
