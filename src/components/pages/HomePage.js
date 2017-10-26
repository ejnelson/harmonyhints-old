import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import Logo from '../Logo';
import ProfileButton from '../ProfileButton';
import AuthModal from '../AuthModal';
import UserProfile from './UserProfile';
import HHInfo from './HHInfo';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      modalOpen: false
    };
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          // User is signed in.
          this.setState({ user, modalOpen: false });
        } else {
          // User is signed out.
          this.setState({ user: null, modalOpen: false });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openAuthModal = () => {
    this.setState({ modalOpen: true });
  };
  closeAuthModal = () => {
    this.setState({ modalOpen: false });
  };
  signOut = () => {};
  render() {
    console.log('checking auth');
    let { user } = this.state;
    console.log('user=', user);
    return (
      <div>
        <Logo />
        {user ? 'authed' : 'not authed'}
        {this.state.modalOpen ? (
          <AuthModal
            closeAuthModal={this.closeAuthModal}
            startAuthUI={this.props.startAuthUI}
            resetAuthUI={this.props.resetAuthUI}
          />
        ) : null}
        {user ? <UserProfile signOut={this.props.signOut} /> : <HHInfo />}
        <ProfileButton openAuthModal={this.openAuthModal} />
      </div>
    );
  }
}

HomePage.propTypes = {
  startAuthUI: PropTypes.func.isRequired,
  resetAuthUI: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};
