import React, { useState, useEffect } from "react";
import axios from "axios";
import Forum from "./Forum";

const API = process.env.REACT_APP_API_URL;

function Forums() {
  const [forums, setForums] = useState([]);

  useEffect(() => {
    axios.get(`${API}/forums`)
      .then((response) => {
        console.log("Fetched forums:", response.data);
        setForums(response.data);
      })
      .catch((err) => console.warn("Error fetching forums:", err));
  }, []);
  

  return (
    <div className="Forums">
      <table>
        <thead>
          <tr>
            <th className="title">Title</th>
            <th className="category">Category</th>
            <th className="date">Date</th>
            <th className="content">Content</th>

          </tr>
        </thead>
        <tbody>
          {forums
  ? forums.map((forum) => {
      return <Forum key={forum.id} forum={forum} />;
    })
  : null}

        </tbody>
      </table>
    </div>
  );
}

export default Forums;


