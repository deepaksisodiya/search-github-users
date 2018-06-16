import React from 'react';
import PropTypes from 'prop-types';

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
    return <div>Now show users</div>;
  }
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired
};

export default UsersList;
