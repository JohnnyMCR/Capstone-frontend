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
