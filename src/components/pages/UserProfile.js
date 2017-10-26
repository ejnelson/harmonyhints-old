import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        This is everything about the user
        <button onClick={this.props.signOut}>sign out</button>
      </div>
    );
  }
}
UserProfile.propTypes = {
  signOut: PropTypes.func.isRequired
};
