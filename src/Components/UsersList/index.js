import React from 'react';
import PropTypes from 'prop-types';

import UserCard from './../UserCard';
import './UserList.css';

const UsersList = ({ isLoading, isError, data }) => {
  if (isLoading) {
    return <div>(Loading)Getting users...</div>;
  }

  if (isError) {
    return <div>Error in finding the user, Please try again</div>;
  }

  if (!data.total_count) {
    return <div>Please search from header</div>;
  }

  if (data.total_count === 0) {
    return <div>Now show users</div>;
  }

  if (data.total_count > 0) {
    return (
      <div className="user-list">
        <div className="total-results">Total Results : {data.total_count}</div>
        {data.items.map((user, index) => <UserCard key={index} user={user} />)}
      </div>
    );
  }
};

UsersList.propTypes = {
  data: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired
};

export default UsersList;
