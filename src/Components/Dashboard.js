import React from 'react';

const Dashboard = ({ user }) => {
  // Example data for donation history and forum post history
  const donationHistory = [
    { id: 1, amount: 50, date: '2023-08-01' },
    { id: 2, amount: 100, date: '2023-07-15' },
    // Add more donation data as needed
  ];

  const forumPostHistory = [
    { id: 1, title: 'Getting Started', date: '2023-07-01' },
    { id: 2, title: 'Tips and Tricks', date: '2023-07-10' },
    // Add more forum post data as needed
  ];

  return (
    <div>
      <h2>Welcome to Your Dashboard, {user.displayName}!</h2>

      <section>
        <h3>Donation History</h3>
        <ul>
          {donationHistory.map((donation) => (
            <li key={donation.id}>
              Donated ${donation.amount} on {donation.date}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Forum Post History</h3>
        <ul>
          {forumPostHistory.map((post) => (
            <li key={post.id}>
              Posted "{post.title}" on {post.date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API = process.env.REACT_APP_API_URL;


// const Dashboard = () => {
//   const [profiles, setProfiles] = useState([]);

//   useEffect(() => {
//     async function fetchProfiles() {
//       try {
//         const response = await axios.get(`${API}/profiles`);
//         setProfiles(response.data);
//       } catch (error) {
//         console.error('Error fetching profiles:', error);
//       }
//     }

//     fetchProfiles();
//   }, []);

//   return (
//     <div>
//       <h2>Profiles</h2>
//       <ul>
//         {profiles.map(profile => (
//           <li key={profile.id}>
//             <h3>{profile.username}</h3>
//             <p>Email: {profile.email}</p>
//             <p>Address: {profile.address}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;
