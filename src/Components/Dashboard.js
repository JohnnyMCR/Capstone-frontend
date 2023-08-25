import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Welcome to Your Dashboard, {user.email}!</h2>
      {/* Your dashboard content here */}
    </div>
  );
};

export default Dashboard;
