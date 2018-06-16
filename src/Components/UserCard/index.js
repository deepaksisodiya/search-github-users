import React from 'react';
import PropTypes from 'prop-types';

import './UserCard.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} className="avatar-image" alt="logo" />
      <div className="user-card-info">
        <div className="user-name">{user.login}</div>
        <div>Profile URL: {user.url}</div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserCard;
