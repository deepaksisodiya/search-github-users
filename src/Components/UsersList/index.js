import React from 'react';
import PropTypes from 'prop-types';
import Paginate from 'react-paginate';

import UserCard from '../../Container/UserCard';
import './UserList.css';

const UsersList = ({ isLoading, isError, data, onPageChange }) => {
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

  if (data.total_count > 0) {
    const pageCount = Math.ceil(data.total_count / 4);

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
            pageCount={pageCount}
            breakClassName="prev-next-button"
            pageClassName="prev-next-button"
            activeClassName="active-page"
            disabledClassName="disabled-button"
          />
        </div>
      </div>
    );
  }
};

UsersList.propTypes = {
  data: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default UsersList;
