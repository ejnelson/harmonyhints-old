import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { AppContainer } from 'react-hot-loader';
import './less/app.less';
import Root from './containers/Root';

const render = (Component) => {
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
