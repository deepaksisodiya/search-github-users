import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../Components/Button';
import { fetchUserRepos } from '../../request';

import './UserCard.css';

export default class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isError: false,
      data: []
    };
    this.getUserRepos = this.getUserRepos.bind(this);
  }

  async getUserRepos(username) {
    this.setState({
      isLoading: true
    });

    try {
      const response = await fetchUserRepos(username);
      if (response.ok) {
        const data = await response.json();

        this.setState({
          data
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
    const { user } = this.props;

    return (
      <div className="user-card">
        <img src={user.avatar_url} className="avatar-image" alt="logo" />
        <div>
          <div className="user-name">{user.login}</div>
          <div className="profile-url">Profile URL: {user.url}</div>
          <div>User type: {user.type}</div>
          <div>Score: {user.score}</div>
        </div>
        <div className="user-card-button">
          <Button onClick={() => this.getUserRepos(user.login)} />
        </div>
      </div>
    );
  }
}

// TODO improve the proptype later
UserCard.propTypes = {
  user: PropTypes.object.isRequired
};
