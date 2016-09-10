import React, { Component } from 'react';

const styles = {
  base: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: '#777',
  }
};

class AppError extends Component {
  render() {
    return <div style={styles.base}>{this.props.children}</div>;
  }
}

export default AppError;
