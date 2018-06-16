import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  state = {
    name: ''
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
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
