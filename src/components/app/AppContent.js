import React, { Component } from 'react';
import Radium from 'radium';

import Paper from 'material-ui/Paper';

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1,
    position: 'relative',
  },
};

class AppContent extends Component {
  render() {
    return (
      <Paper style={styles.base}>
        {this.props.children}
      </Paper>
    );
  }
};

export default Radium(AppContent);
