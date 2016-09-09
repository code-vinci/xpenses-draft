import React, { Component } from 'react';
import Radium from 'radium';

import Paper from 'material-ui/Paper';

import AppHeader from '../../components/app/AppHeader';

const styles = {
  base: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    flexDirection: 'row',
    overflow: 'hidden',

    '@media (min-width: 720px)': {
      maxWidth: '90vw',
      bottom: 64,
      top: 64,
      left: 0,
      right: 0,
      margin: 'auto',
      position: 'absolute',
      height: 'auto',
    },
  },

  content: {
    flex: 1,
  },
};

class AppContent extends Component {
  render() {
    return (
      <div style={styles.base}>
        <Paper style={styles.content} zDepth={1}>
          <AppHeader />
        </Paper>
      </div>
    );
  }
};

export default Radium(AppContent);
