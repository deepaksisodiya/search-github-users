import React from 'react';
import PropTypes from 'prop-types';

import './UserReposList.css';

const UserRepo = ({ repo }) => {
  return (
    <div className="user-repo">
      <div>{repo.name}</div>
      <div>{repo.language}</div>
    </div>
  );
};

const UserReposList = ({ isLoading, isError, data }) => {
  if (isLoading) {
    return <div className="repo-state">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="repo-state error">
        Error in getting user repos, Please try again
      </div>
    );
  }

  if (data && data.length === 0) {
    return <div className="repo-state">User does not have any repo</div>;
  }

  if (data && data.length > 0) {
    return (
      <div>
        {data.map((repo, index) => <UserRepo key={index} repo={repo} />)}
      </div>
    );
  }
};

UserReposList.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired
};

export default UserReposList;
