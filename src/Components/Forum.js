import React from "react";
import { Link } from "react-router-dom";

function Forum({ forum }) {
  return (
    <tr>
      <td className="title">
        <Link to={`/forums/${forum.id}`}>{forum.title}</Link>
      </td>
      <td className="category">{forum.category}</td>
      <td className="date">{forum.date}</td>
      <td className="content">{forum.content}</td>
    </tr>
  );
}

export default Forum;
