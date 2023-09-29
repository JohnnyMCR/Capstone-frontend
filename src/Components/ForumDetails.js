// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import Comments from "./Comments";

// const API = process.env.REACT_APP_API_URL;

// function ForumDetails() {
//   const [forum, setForum] = useState([]);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`${API}/forums/${id}`)
//       .then((response) => {
//         setForum(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching forum details:", error);
//       });
//   }, [id]);

//   const deleteForum = () => {
//     axios
//       .delete(`${API}/forums/${id}`)
//       .then(() => {
//         console.log("Forum deleted successfully.");
//         navigate(`/forums`);
//       })
//       .catch((error) => {
//         console.error("Error deleting forum:", error);
//       });
//   };

//   const handleDelete = () => {
//     console.log("Deleting forum...");
//     deleteForum();
//   };

//   return (
//     <article className="details">
//       {forum && (
//         <div className="details">
//           <h1>
//             <strong>{forum.title}</strong>
//           </h1>

//           <h2>
//             <strong>Category:</strong> {forum.category}
//           </h2>

//           <p>
//             <strong>Date:</strong> {forum.date}
//           </p>
//           <p>
//             <strong>Content:</strong> {forum.content}
//           </p>
//         </div>
//       )}
//       <br />
//       <div className="showNavigation">
//         <div>
//           <Link to="/forums">
//             <button>Back to Forums</button>
//           </Link>
//           <Link to={`/forums/${id}/edit`}>
//             <button>Edit Forum</button>
//           </Link>
//           <button onClick={handleDelete}>Delete Forum</button>
//         </div>
//       </div>
//       <div className="comments">
//         <h2>
//           <strong>Comments</strong>
//         </h2>
//         <Comments />
//       </div>
//     </article>
//   );
// }

// export default ForumDetails;
