import React, { useState, useEffect } from "react";
import axios from "axios";
import Forum from "./Forum";
import CategoryFilter from "./CategoryFilter"; 

const API = process.env.REACT_APP_API_URL;

function Forums() {
  const [forums, setForums] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); 
  useEffect(() => {
    axios
      .get(`${API}/forums`)
      .then((response) => {
        console.log("Fetched forums:", response.data);
        setForums(response.data);
      })
      .catch((err) => console.warn("Error fetching forums:", err));
  }, []);

  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  
  const filteredForums = selectedCategory
    ? forums.filter((forum) => forum.category === selectedCategory)
    : forums;

  return (
    <div className="Forums">
      <CategoryFilter
        categories={Array.from(new Set(forums.map((forum) => forum.category)))}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

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
          {filteredForums.map((forum) => {
            return <Forum key={forum.id} forum={forum} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Forums;
