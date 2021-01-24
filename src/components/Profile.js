import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import JSONPretty from 'react-json-pretty';
import Footer from './Footer';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="pad">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <JSONPretty data={user} />
        <Footer />
      </div>
    )
  );
};

export default Profile;
