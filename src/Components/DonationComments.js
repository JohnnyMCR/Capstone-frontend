import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const API = process.env.REACT_APP_API_URL;

export default function DonationComments({ donations_id }) {
  const { currentUser, auth } = useContext(AuthContext);
  console.log(currentUser, auth, 'nav test');
  const [donationComments, setDonationComments] = useState([]);
  const [newDonationComment, setNewDonationComment] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  console.log(donations_id, 'testing donation ID');

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  // console.log(!isExpanded)

  const handleDonationCommentChange = (event) => {
    setNewDonationComment(event.target.value);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
  
    if (currentUser) {
      const actualNewDonationComment = {
        content: newDonationComment,
        user_id: currentUser.id,
        donations_id,
        date: new Date().toLocaleDateString(),
      };
  
      try {
        const response = await axios.post(`${API}/donation-comments`, actualNewDonationComment);
  
        console.log(actualNewDonationComment);
        console.log(response.data);
  
        const addedDonationComment = {
          ...response.data,
          username: currentUser.username,
        };
  
        setDonationComments([...donationComments, addedDonationComment]);
        setNewDonationComment('');
      } catch (error) {
        console.error('Error submitting comment:', error);
      }
    } else {
      console.error('currentUser is not defined');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/donations/${donations_id}/donation-comments`);
        console.log(response.data);
        setDonationComments(response.data);
      } catch (error) {
        console.warn('Error fetching comments:', error);
      }
    };
  
    fetchData();
  }, [donations_id]);
  
  return (
    <div className="column control is-flex is-justify-content-center is-align-items-center">
      <button
        className="button is-medium is-rounded is-primary has-text-weight-bold"
        onClick={toggleExpand}
      >
        {isExpanded ? 'Hide Comments' : 'Show Comments'}
      </button>

      {isExpanded && (
        <div className="comments-box">
          <h2 className="title is-4">Comments</h2>
          <ul>
            {donationComments.map((comment) => (
              <li key={comment.id}>
                {comment.content} - Posted by {comment.username}
              </li>
            ))}
          </ul>
          <div className="comment-box">
            <textarea
              className="textarea"
              placeholder="Add your comment..."
              value={newDonationComment}
              onChange={handleDonationCommentChange}
            />
            <button
              className="button is-rounded has-text-weight-bold is-primary mt-3"
              onClick={handleSubmitComment}
            >
              Submit Comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


