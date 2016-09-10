import React, { Component } from 'react';
import Radium from 'radium';

import { green600 } from 'material-ui/styles/colors';

const styles = {
  base: {
    display: 'none',

    '@media (min-width: 720px)': {
      display: 'block',
      height: 112,
      backgroundColor: green600,
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      zIndex: -1,
    }
  }
};

class AppBackground extends Component {
  render() {
    return <div style={styles.base}></div>;
  }
};

export default Radium(AppBackground);
