import React from 'react';

function Profile({user}) {
  console.log(user)

  return (
    <div>
      {user ? (
        <div>
          <p>{user.displayName}</p>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

export default Profile;
