import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import firebaseui from 'firebaseui';

export default class AuthModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // The start method will wait until the DOM is loaded.
    this.props.startAuthUI();
  }
  componentDidUpdate() {
    console.log('update');
  }
  render() {
    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,
      zIndex: 1.5
    };
    const authContainer = {
      zIndex: 5
    };

    return (
      <div>
        <div
          onClick={() => {
            this.props.closeAuthModal();
            this.props.resetAuthUI();
          }}
          style={backdropStyle}
          id='backdrop'
        />
        <div id='authContainer' style={authContainer}>
          <div id='firebaseui-auth-container' />
        </div>
      </div>
    );
  }
}

AuthModal.propTypes = {
  startAuthUI: PropTypes.func.isRequired,
  resetAuthUI: PropTypes.func.isRequired,
  closeAuthModal: PropTypes.func.isRequired
};
