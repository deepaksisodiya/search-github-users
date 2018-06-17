import React from 'react';
import PropTypes from 'prop-types';

const UserReposList = ({ isLoading, isError, data }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error in getting user repos, Please try again</div>;
  }

  if (data && data.length === 0) {
    return <div>User does not have any repo</div>;
  }

  if (data && data.length > 0) {
    return <div>Now show the user repos</div>;
  }
};

UserReposList.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired
};

export default UserReposList;
