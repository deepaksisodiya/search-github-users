import React, { Component } from 'react';

import Header from './Header';
import { fetchUsers } from './Request';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isError: false,
      users: []
    };
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  async getAllUsers(name) {
    this.setState({
      isLoading: true
    });

    try {
      const response = await fetchUsers(name);
      if (response.ok) {
        const users = await response.json();
        this.setState({
          users
        });
      }
    } catch (error) {
      this.setState({
        isError: true
      });
    } finally {
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header getAllUsers={this.getAllUsers} />
        <div>middle content comes here</div>
      </div>
    );
  }
}

export default App;
