import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SORT_BY } from './../../utils';
import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    name: '',
    sortBy: SORT_BY.A_Z
  };

  handleNameChange(event) {
    this.setState(
      {
        name: event.target.value
      },
      () => {
        if (this.state.name && this.state.sortBy) {
          this.handleSubmit(event);
        }
      }
    );
  }

  handleSortChange(event) {
    this.setState(
      {
        sortBy: event.target.value
      },
      () => {
        if (this.state.name && this.state.sortBy) {
          this.handleSubmit(event);
        }
      }
    );
  }

  handleSubmit(event) {
    this.props.getAllUsers(this.state.name, this.state.sortBy);
    event.preventDefault();
  }

  render() {
    const { name, sortBy } = this.state;

    return (
      <header className="Header">
        <form className="form">
          <select
            value={sortBy}
            onChange={this.handleSortChange}
            className="sort-input"
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
            className="name-input"
          />
        </form>
      </header>
    );
  }
}

Header.propTypes = {
  getAllUsers: PropTypes.func.isRequired
};
