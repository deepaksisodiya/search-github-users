import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Debounce from 'lodash.debounce';

import { SORT_BY } from './../../utils';

import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sortBy: SORT_BY.A_Z
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.debounceFetchUsers = Debounce(this.debounceFetchUsers, 500);
  }

  debounceFetchUsers() {
    if (this.state.name && this.state.sortBy) {
      this.props.getAllUsers(this.state.name, this.state.sortBy, 1);
    }
  }

  handleNameChange(event) {
    event.preventDefault();
    const nameValue = event.target.value;
    this.setState(
      {
        name: nameValue
      },
      () => {
        this.debounceFetchUsers();
      }
    );
  }

  handleSortChange(event) {
    event.preventDefault();
    this.setState(
      {
        sortBy: event.target.value
      },
      () => {
        if (this.state.name && this.state.sortBy) {
          this.props.getAllUsers(this.state.name, this.state.sortBy, 1);
        }
      }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { name, sortBy } = this.state;

    return (
      <header className="header">
        <form className="header-form" onSubmit={this.handleSubmit}>
          <select
            value={sortBy}
            onChange={this.handleSortChange}
            className="header-sort-input"
          >
            <option value={SORT_BY.A_Z}>Name(A-Z)</option>
            <option value={SORT_BY.Z_A}>Name(Z-A)</option>
            <option value={SORT_BY.RANK_UP}>Rank ↑</option>
            <option value={SORT_BY.RANK_DOWN}>Rank ↓</option>
          </select>
          <input
            type="text"
            value={name}
            onChange={this.handleNameChange}
            placeholder="Enter Name"
            className="header-name-input"
          />
        </form>
      </header>
    );
  }
}

Header.propTypes = {
  getAllUsers: PropTypes.func.isRequired
};
