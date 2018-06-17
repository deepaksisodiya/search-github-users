import React from 'react';
import PropTypes from 'prop-types';
import Paginate from 'react-paginate';

import UserCard from '../../Container/UserCard';
import './UserList.css';

const UsersList = ({ isLoading, isError, data }) => {
  if (isLoading) {
    return <div className="users-state">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="users-state error">
        Error in searching for given name, Please try again
      </div>
    );
  }

  if (!data.total_count) {
    return <div className="users-state">Please search users by name</div>;
  }

  if (data.total_count === 0) {
    return (
      <div className="users-state">
        No user found for given name, Please try with other name
      </div>
    );
  }

  const onPageChange = pageObj => {
    console.log(pageObj.selected + 1);
  };

  if (data.total_count > 0) {
    return (
      <div className="user-list">
        <div className="total-results">Total Results : {data.total_count}</div>
        {data.items.map((user, index) => <UserCard key={index} user={user} />)}
        <div className="pagination">
          <Paginate
            containerClassName="paginate-container"
            previousClassName="prev-next-button"
            nextClassName="prev-next-button"
            onPageChange={onPageChange}
          />
        </div>
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
