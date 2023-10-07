import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const API = process.env.REACT_APP_API_URL;

export default function DonationComments({ donations_id, donationContent }) {
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

  const handleSubmitComment = (e) => {
    e.preventDefault();

    if (currentUser) {
      const actualNewDonationComment = {
        content: newDonationComment,
        user_id: currentUser.id,
        donations_id,
        date: new Date().toLocaleDateString(),
      };

      axios
        .post(`${API}/donation-comments`, actualNewDonationComment)
        .then((response) => {
          console.log(actualNewDonationComment);
          console.log(response.data);

          const addedDonationComment = {
            ...response.data,
            username: currentUser.username,
          };

          setDonationComments([...donationComments, addedDonationComment]);
          setNewDonationComment('');
        })
        .catch((error) => {
          console.error('Error submitting comment:', error);
        });
    } else {
      console.error('currentUser is not defined');
    }
  };

  useEffect(() => {
    axios
      .get(`${API}/donations/${donations_id}/donation-comments`)
      .then((response) => {
        console.log(response.data);
        setDonationComments(response.data);
      })
      .catch((e) => console.warn('Error fetching comments:', e));
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


// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from './AuthContext';


// const API = process.env.REACT_APP_API_URL;

// export default function DonationComments({ donations_id, donationContent }) {

//     const {currentUser, auth} = useContext(AuthContext)
//     console.log(currentUser, auth, "nav test")
//     const [donationComments, setDonationComments] = useState([]);
//     const [newDonationComment, setNewDonationComment] = useState('');
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     // const [editingCommentId, setEditingCommentId] = useState(null);

//     // console.log(comments)
//     console.log(donations_id, 'testing donation ID')

//     const toggleExpand = () => {
//         setIsExpanded(!isExpanded);
//     };

//     const handleDonationCommentChange = (event) => {
//         setNewDonationComment(event.target.value);
//     };

//     // const handleEditClick = (commentId) => {
//     //     setEditingCommentId(commentId);
//     // };

//     // const handleCancelEdit = () => {
//     //     setEditingCommentId(null);
//     // };

//     const openModal = () => {
//       setIsModalOpen(true);
//     };
  
//     const closeModal = () => {
//       setIsModalOpen(false);
//     };

//     const handleUpdateComment = (updatedDonationComment) => {
//       const updatedDonationComments = donations_id.map((donation) => {
//           if (donation.id === updatedDonationComment.id) {
//               return updatedDonationComment;
//           }
//           return donation;
//       });
//       setDonationComments(updatedDonationComments);
//   };


    
//     const handleSubmitComment = (e) => {
//         e.preventDefault();
      
//         if (currentUser) {
//           const actualNewDonationComment = {
//             content: newDonationComment,
//             user_id: currentUser.id,
//             donations_id,
//             date: new Date().toLocaleDateString(),
//           };
      
//           axios
//             .post(`${API}/donation-comments`, actualNewDonationComment)
//             .then((response) => {
//               console.log(actualNewDonationComment);
//               console.log(response.data);
      
//               const addedDonationComment = { ...response.data, username: currentUser.username };
      
//               setDonationComments([...donationComments, addedDonationComment]);
//               setNewDonationComment('');
//             })
//             .catch((error) => {
//               console.error('Error submitting comment:', error);
//             });
//         } else {
//           console.error('currentUser is not defined');
//         }
//       };

//     useEffect(() => {
//         axios.get(`${API}/donations/${donations_id}/donation-comments`)
//             .then((response) => {
//                 console.log(response.data)
//                 setDonationComments(response.data);
//             })
//             .catch((e) => console.warn("Error fetching comments:", e));
//     }, [donations_id]);


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
//                 {/* <p className="content is-size-6 is-large has-text-dark">
//                   Distance: miles away
//                 </p> */}
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