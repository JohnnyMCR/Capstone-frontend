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


// import React from "react";
// import Donations from "../Components/Donations";

// export default function SingleDonation({ donation }) {
//     return (
//         <div className="SingleDonation">
//             <h2>Single Donation</h2>
//             {donation ? (
//                 <Donations
//                     donation={donation}
//                     onEdit={(editedDonation) => {
//                     }}
//                     onDelete={(deletedDonation) => {
//                     }}
//                 />
//             ) : (
//                 <p>No donation selected.</p>
//             )}
// import React, { useState } from "react";
// import Donation from "../Components/Donation";
// import Donation from "./Donations";

// export default function SingleDonation({ donation }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

  //make api call to backend for a SINGLE donation id

  //         <div className="SingleDonation">
  //             <h2>Single Donation</h2>
  //             {donation ? (
  //                 <Donation
  //                     donation={donation}
  //                     onEdit={(editedDonation) => {
  //                     }}
  //                     onDelete={(deletedDonation) => {
  //                     }}
  //                 />
  //             ) : (
  //                 <p>No donation selected.</p>
  //             )}
  //         </div>
  //     );
  // }

//   return (
//     // <div>
//     <div className="column control is-flex is-justify-content-center is-align-items-center">
//       {/* <div className="control " > */}
//       <button
//         className="button is-medium is-rounded is-primary has-text-weight-bold"
//         onClick={openModal}
//       >
//         Show More
//       </button>
//       {/* </div> */}
//       {/* </div> */}

//       <div className={`modal ${isModalOpen ? "is-active" : ""}`}>
//         <div className="modal-background " onClick={closeModal}></div>
//         <div className="modal-card">
//           <section className="modal-card-body py-6 px-6 has-background-info">
//             <div className="columns">
//               <h1 className="modal-card-title title is-2 has-text-primary has-text-left">
//                 Donation Details
//               </h1>
//               <button
//                 className="delete"
//                 aria-label="close"
//                 onClick={closeModal}
//               ></button>
//             </div>
//             <div className="columns">
//               <div className="column">
//                 <figure className="image is-96x128">
//                   <img
//                     src="https://bulma.io/images/placeholders/96x96.png"
//                     alt="donation"
//                   />
//                 </figure>
//               </div>
//               <div className="column has-text-left is-three-fifths">
//                 <p className="content is-size-4 is-large has-text-primary has-text-weight-bold">
//                   Title:{" "}
//                 </p>
//                 <p className="content is-size-6 is-large has-text-dark">
//                   User:{" "}
//                 </p>
//                 <p className="content is-size-6 is-large has-text-dark">
//                   Drescription:{" "}
//                 </p>
//                 <p className="content is-size-6 is-large has-text-dark">
//                   Category:{" "}
//                 </p>
//                 <p className="content is-size-6 is-large has-text-dark">
//                   Distance: miles away
//                 </p>
//               </div>
//             </div>
//             <button className="button has-background-primary is-rounded has-text-white has-text-weight-bold" onClick={closeModal}>
//               Message "The Giver/Donor"
//             </button>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }