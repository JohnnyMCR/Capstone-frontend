import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ForumNew() {
  const navigate = useNavigate();

  const addForum = (newForum) => {
    axios
      .post(`${API}/forums`, newForum)
      .then(
        () => {
          navigate(`/forums`);
        },
        (error) => console.error(error)
      )
      .catch((error) => {
        console.warn("catch", error);
      });
  };

  const [forum, setForum] = useState({
    title: "",
    content: "",
    category: "",
    date: "",
  });

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setForum({ ...forum, date: newDate });
  };


  const handleTextChange = (event) => {
    setForum({ ...forum, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting form with data:', forum);
    addForum(forum);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group1">
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            type="varchar"
            value={forum.title}
            onChange={handleTextChange}
            placeholder="Forum Title"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category: </label>
          <input
            id="category"
            type="varchar"
            value={forum.category}
            onChange={handleTextChange}
            placeholder="Forum Category"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date: </label>
          <textarea
            id="date"
            type="date"
            value={forum.date}
            onChange={handleDateChange}
            placeholder="Forum Date"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content: </label>
          <textarea
            id="content"
            type="text"
            value={forum.content}
            onChange={handleTextChange}
            placeholder="Forum Content"
            className="form-control"
            required
          />
        </div>
        <br />
        <input type="submit" />
      </form>
      <Link to={`/forums`}>
        <button>Back to Forums</button>
      </Link>
    </div>
  );
}

export default ForumNew;

