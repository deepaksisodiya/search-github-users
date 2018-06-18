import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';

import UserCard from '../../Container/UserCard';
import './UserList.css';

const UsersList = ({ isLoading, isError, data, onPageChange, activePage }) => {
  const { items, total_count } = data;

  if (isLoading) {
    return <div className="userlist-users-state">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="userlist-users-state user-list-error">
        Error in searching for given name, Please try again
      </div>
    );
  }

  if (!total_count) {
    return (
      <div className="userlist-users-state">Please search users by name</div>
    );
  }

  if (total_count === 0) {
    return (
      <div className="userlist-users-state">
        No user found for given name, Please try with other name
      </div>
    );
  }

  if (total_count > 0) {
    return (
      <div className="userlist">
        <div className="userlist-total-results">
          Total Results : {total_count}
        </div>
        {items.map((user, index) => <UserCard key={index} user={user} />)}
        <div className="userlist-pagination">
          <Pagination
            activePage={activePage}
            disabledClass="userlist-pagination-disabled-button"
            activeClass="userlist-pagination-active-page"
            itemClass="userlist-pagination-button"
            innerClass="userlist-paginate-container"
            onChange={onPageChange}
            prevPageText="prev"
            nextPageText="next"
            firstPageText="first"
            lastPageText="last"
            totalItemsCount={total_count}
            itemsCountPerPage={4}
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
