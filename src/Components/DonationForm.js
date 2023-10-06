//Take logic from here and place in modal

// import React, { useState } from "react";

// function DonationForm({ addDonation }) {
//   const [newDonation, setNewDonation] = useState({
//     img: "",
//     description: "",
//     userName: "",
//     zipcode: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewDonation({
//       ...newDonation,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addDonation(newDonation);
//     setNewDonation({
//       img: "",
//       description: "",
//       userName: "",
//       zipcode: "",
//     });
//   };

//   return (
//     <div>
//       <h2>Add New Donation</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="img"
//           placeholder="Image URL"
//           value={newDonation.img}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           value={newDonation.description}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="userName"
//           placeholder="User Name"
//           value={newDonation.userName}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="zipcode"
//           placeholder="Zipcode"
//           value={newDonation.zipcode}
//           onChange={handleChange}
//         />
//         <button type="submit">Add Donation</button>
//       </form>
//     </div>
//   );
// }

// export default DonationForm;

