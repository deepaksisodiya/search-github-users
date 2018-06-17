import React, { Component } from 'react';

import Header from './Container/Header';
import UsersList from './Components/UsersList';
import { fetchUsers } from './request';
import { sortUsers } from './utils';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isError: false,
      data: {}
    };
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  componentDidMount() {
    document.body.style = 'background: #F9F9F9;';
  }

  async getAllUsers(name, sortBy, page) {
    this.setState({
      isLoading: true
    });

    try {
      const response = await fetchUsers(name, page);
      if (response.ok) {
        const data = await response.json();
        const sortedData = sortUsers(data.items, sortBy);
        const newData = { ...data, items: sortedData };

        this.setState({
          data: newData
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
    const { data, isLoading, isError } = this.state;

    return (
      <div className="App">
        <Header getAllUsers={this.getAllUsers} />
        <UsersList data={data} isLoading={isLoading} isError={isError} />
      </div>
    );
  }
}

export default App;
