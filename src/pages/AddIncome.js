import React, { Component } from 'react';
import Radium from 'radium';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { green600 } from 'material-ui/styles/colors';

const styles = {
  base: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    margin: 'auto',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#fff',
    zIndex: 100000,

    '@media (min-width: 720px)': {
      width: '90vw',
    },
  },

  header: {
    backgroundColor: green600,
    alignItems: 'center',
  },

  icon: {
    marginTop: 0,
  },
};

class AddIncome extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <div style={styles.base}>
        <AppBar
          title="Adicionar Entrada"
          style={styles.header}
          iconElementLeft={<IconButton onTouchTap={this.goBack}><ArrowBack color="#fff" /></IconButton>}
          iconStyleLeft={styles.icon}
          zDepth={0}
        />
      </div>
    );
  }

  goBack = () => {
    this.context.router.goBack();
  }
}

AddIncome.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Radium(AddIncome);
