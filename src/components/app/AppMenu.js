import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import { green400, green700 } from 'material-ui/styles/colors';

const styles = {
  base: {
    height: 48,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
  },

  button: {
    flex: 1,
    height: 'auto',
    color: '#fff',
    lineHeight: '48px',
    borderRadius: 'none',
  },

  current: {
    backgroundColor: green700,
    pointerEvents: 'none',
  },
};

class AppMenu extends Component {
  render() {
    return (
      <div style={styles.base}>
        {this.props.routes.map(this.renderMenuItems)}
      </div>
    );
  }

  renderMenuItems = (route) => {
    if (! route.title) {
      return false;
    }

    const current = route.path === this.props.current
      ? styles.current
      : {};

    return (
      <FlatButton
        style={{ ...styles.button, ...current }}
        label={route.title}
        key={route.title}
        backgroundColor={this.props.current === route.path ? green700 : green400}
        hoverColor="rgba(255, 255, 255, .2)"
        rippleColor="rgba(255, 255, 255, .3)"
        onClick={() => this.props.router.push(route.path)}
        />
    );
  }
}

export default AppMenu;
