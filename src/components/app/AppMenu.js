import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import { green400, green600, green700 } from 'material-ui/styles/colors';

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
    backgroundColor: green600,
    pointerEvents: 'none',
  },
};

class AppMenu extends Component {
  render() {
    if (! this.props.routes || ! this.props.routes.length) {
      return false;
    };

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

    const path = this.props.current.split('/');
    const current = route.path === path[path.length - 1]
      ? styles.current
      : {};

    return (
      <FlatButton
        style={{ ...styles.button, ...current }}
        label={route.title}
        key={route.title}
        backgroundColor={this.props.current === route.path ? green700 : green400}
        hoverColor={green700}
        rippleColor={green600}
        onClick={() => this.props.router.push(`/${this.props.month.code}/${route.path}`)}
        />
    );
  }
}

export default AppMenu;
