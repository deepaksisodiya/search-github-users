import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../Components/Button';
import UserReposList from './../../Components/UserReposList';
import { fetchUserRepos } from '../../request';

import './UserCard.css';

export default class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isError: false,
      data: [],
      showExpandedView: false
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

  onClick = username => {
    this.setState(
      (prevState, prevProps) => {
        return {
          showExpandedView: !prevState.showExpandedView
        };
      },
      () => {
        // callback function
        this.getUserRepos(username);
      }
    );
  };

  render() {
    const { user } = this.props;
    const { isLoading, isError, data, showExpandedView } = this.state;

    return (
      <div className="user-card">
        <div className="user-card-top">
          <img
            src={user.avatar_url}
            className="user-card-avatar-image"
            alt="logo"
          />
          <div>
            <div className="user-card-user-name">{user.login}</div>
            <div className="user-card-profile-url">Profile URL: {user.url}</div>
            <div>User type: {user.type}</div>
            <div>Score: {user.score}</div>
          </div>
          <div className="user-card-button">
            <Button
              onClick={() => this.onClick(user.login)}
              text={!this.state.showExpandedView ? 'Details' : 'Collapse'}
            />
          </div>
        </div>
        {showExpandedView && (
          <div className="user-expanded-card">
            <UserReposList
              isLoading={isLoading}
              isError={isError}
              data={data}
            />
          </div>
        )}
      </div>
    );
  }
}

// TODO improve the proptype later
UserCard.propTypes = {
  user: PropTypes.object.isRequired
};
