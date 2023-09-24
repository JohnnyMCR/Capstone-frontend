import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function ForumEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [forum, setForum] = useState({
    title: "",
    category: "",
    content: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/forums/${id}`)
      .then((response) => {
        setForum(response.data);
      })
      .catch((error) => {
        console.error("Error fetching forum details:", error);
      });
  }, [id]);

  const handleTextChange = (event) => {
    // Update the state when form fields change
    setForum({
      ...forum,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    axios
      .put(`${API}/forums/${id}`, forum)
      .then(() => {
        console.log("Forum updated successfully.");
        navigate(`/forums/${id}`);
      })
      .catch((error) => {
        console.error("Error updating forum:", error);
      });
  };

  return (
    <div>
      <h2>Edit Forum</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={forum.title}
            onChange={handleTextChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={forum.category}
            onChange={handleTextChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={forum.content}
            onChange={handleTextChange}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
      <Link to={`/forums/${id}`}>
        <button>Back to Forum Details</button>
      </Link>
    </div>
  );
}

export default ForumEdit;
