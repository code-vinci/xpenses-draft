import React, { Component } from 'react';
import Radium from 'radium';
import color from 'color';

import CircularProgress from 'material-ui/CircularProgress';

import { grey100, green600 } from 'material-ui/styles/colors';

const styles = {
  base: {
    position: 'absolute',
    backgroundColor: color(grey100).clearer(0).rgbaString(),
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 10000,
    pointerEvents: 'none',
    opacity: 0,
    transition: 'opacity .2s',
  },

  isLoading: {
    pointerEvents: 'auto',
    opacity: 1,
  },

  loader: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
  },
};

class AppLoader extends Component {
  render() {
    return (
      <div style={[ styles.base, this.props.isLoading.length && styles.isLoading ]}>
        <CircularProgress
          style={styles.loader}
          color={green600}
          size={this.props.size || 1}
          />
      </div>
    );
  }
}

export default Radium(AppLoader);
