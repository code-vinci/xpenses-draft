import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { StyleRoot } from 'radium';
import { Provider } from 'react-redux';

import store from './data/store';

import Routes from './routes';

import './index.css';

injectTapEventPlugin();

const Root = () => (
  <MuiThemeProvider>
    <StyleRoot>
      <Provider store={store}>
        <Routes />
      </Provider>
    </StyleRoot>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
