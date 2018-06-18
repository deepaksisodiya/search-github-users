import React from 'react';
import PropTypes from 'prop-types';

import './UserReposList.css';

const UserReposList = ({ isLoading, isError, data }) => {
  if (isLoading) {
    return <div className="user-repo-state">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="user-repo-state user-repo-error">
        Error in getting user repos, Please try again
      </div>
    );
  }

  if (data && data.length === 0) {
    return <div className="user-repo-state">User does not have any repo</div>;
  }

  if (data && data.length > 0) {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Repo Name</th>
              <th>Language</th>
            </tr>
            {data.map((repo, index) => {
              return (
                <tr key={index}>
                  <td>{repo.name}</td>
                  <td>{repo.language}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
