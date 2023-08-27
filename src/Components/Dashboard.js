import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Welcome to Your Dashboard, {user.displayName}!</h2>
    </div>
  );
};

export default Dashboard;
