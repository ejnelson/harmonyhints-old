import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import * as firebase from 'firebase';

import Root from './containers/Root';

let config = {
  apiKey: 'AIzaSyBmAZvDvgZxi1Vlioax3wH89-Klamleeos',
  authDomain: 'harmonyhints.firebaseapp.com',
  databaseURL: 'https://harmonyhints.firebaseio.com',
  projectId: 'harmonyhints',
  storageBucket: 'harmonyhints.appspot.com',
  messagingSenderId: '38077228672'
};
const render = (Component) => {
  // Initialize Firebase
  firebase.initializeApp(config);
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    render(Root);
  });
}
