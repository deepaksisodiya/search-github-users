import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Header.css';

export default class Header extends Component {
  state = {
    name: '',
    sortValue: ''
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });

    if (name === 'name') {
      this.props.getAllUsers(value);
    }

    event.preventDefault();
  };

  render() {
    const { name, sortValue } = this.state;

    return (
      <header className="Header">
        <form>
          <select
            value={sortValue}
            onChange={this.handleChange}
            name="sortValue"
            className="sort-input"
          >
            <option value="a-z">Name(A-Z)</option>
            <option value="z-a">Name(Z-A)</option>
            <option value="rankUp">Rank ↑</option>
            <option value="rankDown">Rank ↓</option>
          </select>
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            name="name"
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
