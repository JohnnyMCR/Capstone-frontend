// import React, { useState, useEffect } from 'react';
// import axios from "axios";
//import Profile from "./Profile";
// const API = process.env.REACT_APP_API_URL;
//const Dashboard = ({ user }) => {
  // const [userForums, setUserForums] = useState([]);
  // useEffect(() => {
  //   async function fetchUserForums() {
  //     try {
  //       const response = await axios.get(`${API}/forums?user_id=${user.id}`);
  //       console.log("API response:", response.data);
  //       setUserForums(response.data);
  //     } catch (error) {
  //       console.error("Error fetching user forums:", error);
  //     }
  //   }
  //   fetchUserForums();
  // }, [user.id]);
  // return (
  //   <div>
  //     <h2><Profile user={user} />
  //     </h2>
  //     <section>
        /* <h3>Your Forum Post History</h3>
        <ul>
          {userForums.map((forum) => (
            <li key={forum.id}>
              <h3>{forum.title}</h3>
              <p>Category: {forum.category}</p>
              <p>Date: {forum.date}</p>
              <p>{forum.content}</p>
            </li>
          ))}
        </ul> */
//       </section>
//     </div>
//   );
// };
// export default Dashboard;