import React from 'react';
import PropTypes from 'prop-types';

import Button from './../Button';
import './UserCard.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} className="avatar-image" alt="logo" />
      <div>
        <div className="user-name">{user.login}</div>
        <div className="profile-url">Profile URL: {user.url}</div>
        <div>User type: {user.type}</div>
        <div>Score: {user.score}</div>
      </div>
      <div className="user-card-button">
        <Button />
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserCard;
