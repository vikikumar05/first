import React from 'react';

const HomePage = ({ userDetails }) => {
  return (
    <div>
      <h1>Welcome {userDetails ? userDetails.name : 'Guest'}!</h1>
      <p>{userDetails ? 'You are now logged in.' : 'Please login to continue.'}</p>
    </div>
  );
};

export default HomePage;
