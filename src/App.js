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
      data: {},
      searchForm: {},
      activePage: 1
    };
    this.getAllUsers = this.getAllUsers.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount() {
    document.body.style = 'background: #F9F9F9;';
  }

  async getAllUsers(name, sortBy, pageNumber) {
    this.setState({
      isLoading: true,
      activePage: pageNumber
    });

    try {
      const response = await fetchUsers(name, pageNumber);
      if (response.ok) {
        const data = await response.json();
        const sortedData = sortUsers(data.items, sortBy);
        const newData = { ...data, items: sortedData };

        const searchForm = {
          name,
          sortBy
        };

        this.setState({
          data: newData,
          searchForm,
          isLoading: false
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

  onPageChange = pageNumber => {
    const { searchForm } = this.state;

    this.setState(
      (prevState, prevProp) => {
        return {
          activePage: pageNumber
        };
      },
      () => {
        this.getAllUsers(searchForm.name, searchForm.sortBy, pageNumber);
      }
    );
  };

  render() {
    const { data, isLoading, isError, activePage } = this.state;

    return (
      <div className="app">
        <Header getAllUsers={this.getAllUsers} />
        <UsersList
          data={data}
          isLoading={isLoading}
          isError={isError}
          onPageChange={this.onPageChange}
          activePage={activePage}
        />
      </div>
    );
  }
}

export default App;
