import React, { Component } from 'react';
import Radium from 'radium';

import Paper from 'material-ui/Paper';
import AppLoader from './AppLoader';

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    position: 'relative',
  },
};

class AppContent extends Component {
  render() {
    return (
      <Paper style={styles.base}>
        {this.props.children}
        <AppLoader isLoading={this.props.isLoading} />
      </Paper>
    );
  }
};

export default Radium(AppContent);
