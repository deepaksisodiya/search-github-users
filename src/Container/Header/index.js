import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Header.css';

export default class Header extends Component {
  state = {
    name: ''
  };

  handleChange = event => {
    const { value } = event.target;

    this.setState({
      name: value
    });

    this.props.getAllUsers(value);
    event.preventDefault();
  };

  render() {
    const { name } = this.state;

    return (
      <header className="Header">
        <form>
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
