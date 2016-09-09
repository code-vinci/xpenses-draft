import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { StyleRoot } from 'radium';

import Home from './pages/Home';

import './index.css';

injectTapEventPlugin();

const App = _ => (
  <MuiThemeProvider>
    <StyleRoot>
      <Home />
    </StyleRoot>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
