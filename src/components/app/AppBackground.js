import React, { Component } from 'react';
import Radium from 'radium';

import { green600 } from 'material-ui/styles/colors';

const styles = {
  base: {
    display: 'none',

    '@media (min-width: 720px)': {
      display: 'block',
      height: 128,
      backgroundColor: green600,
    }
  }
};

class AppBackground extends Component {
  render() {
    return <div style={styles.base}></div>;
  }
};

export default Radium(AppBackground);
