import React, { Component } from 'react';
import * as firebase from 'firebase';
import firebaseui from 'firebaseui';
import HomePage from '../components/pages/HomePage';

// firebase config
let config = {
  apiKey: 'AIzaSyBmAZvDvgZxi1Vlioax3wH89-Klamleeos',
  authDomain: 'harmonyhints.firebaseapp.com',
  databaseURL: 'https://harmonyhints.firebaseio.com',
  projectId: 'harmonyhints',
  storageBucket: 'harmonyhints.appspot.com',
  messagingSenderId: '38077228672'
};

// FirebaseUI config.
let uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      // Invisible reCAPTCHA with image challenge and bottom left badge.
      recaptchaParameters: {
        type: 'image',
        size: 'invisible',
        badge: 'bottomleft'
      }
    }
  ]
};
// Initialize Firebase
firebase.initializeApp(config);
// Initialize the FirebaseUI Widget using Firebase.
let ui = new firebaseui.auth.AuthUI(firebase.auth());

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false
    };
  }
  startAuthUI = () => {
    ui.start('#firebaseui-auth-container', uiConfig);
    this.setState({ authed: true });
  };
  resetAuthUI = () => {
    ui.reset();
    this.setState({ authed: false });
  };
  signOut = () => {
    firebase.auth().signOut();
    this.setState({ authed: false });
  };
  render() {
    return (
      <HomePage
        authed={this.state.authed}
        startAuthUI={this.startAuthUI}
        resetAuthUI={this.resetAuthUI}
        signOut={this.signOut}
      />
    );
  }
}
