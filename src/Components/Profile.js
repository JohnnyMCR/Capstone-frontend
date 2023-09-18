import React from "react";
const Profile = ({ user }) => {
  return (
    <div className="Profile">
      {user ? (
        <p><strong>Welcome, {user.displayName}!</strong></p>
      ) : (
        <p><strong>Not logged in</strong></p>
      )}
    </div>
  );
};
export default Profile;