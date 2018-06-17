import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';

import UserCard from '../../Container/UserCard';
import './UserList.css';

const UsersList = ({ isLoading, isError, data, onPageChange, activePage }) => {
  const { items, total_count } = data;

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

  if (!total_count) {
    return <div className="users-state">Please search users by name</div>;
  }

  if (total_count === 0) {
    return (
      <div className="users-state">
        No user found for given name, Please try with other name
      </div>
    );
  }

  if (total_count > 0) {
    const totalItemsCount = Math.ceil(total_count / 4);

    return (
      <div className="user-list">
        <div className="total-results">Total Results : {total_count}</div>
        {items.map((user, index) => <UserCard key={index} user={user} />)}
        <div className="pagination">
          <Pagination
            activePage={activePage}
            disabledClass="disabled-button"
            activeClass="active-page"
            itemClass="prev-next-button"
            innerClass="paginate-container"
            totalItemsCount={200}
            onChange={onPageChange}
          />
        </div>
      </div>
    );
  }
};

UsersList.propTypes = {
  data: PropTypes.shape({
    total_count: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired
  }),
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default UsersList;
