import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProfileButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <button onClick={this.props.openAuthModal}>profile</button>;
  }
}
ProfileButton.propTypes = {
  openAuthModal: PropTypes.func.isRequired
};
