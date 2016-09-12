import React, { Component } from 'react';
import Radium from 'radium';

import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import CircularProgress from 'material-ui/CircularProgress';
import { green600 } from 'material-ui/styles/colors';

const styles = {
  base: {
    color: '#fff',
  },

  header: {
    backgroundColor: green600,
    alignItems: 'center',
    paddingRight: 0,
  },

  icon: {
    marginTop: 0,
    position: 'relative',
  },

  dropdownWrapper: {
    position: 'relative',
  },

  dropdown: {
    height: '100%',
    minHeight: 48,
    minWidth: 150,
  },

  dropdownLabel: {
    color: '#fff',
    fontSize: '24px',
  },

  dropdownUnderline: {
    display: 'none',
  },

  dropdownMenu: {
    fontSize: '24px',
    lineHeight: '48px',
  },

  loader: {
    backgroundColor: green600,
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    textAlign: 'center',
    visibility: 'hidden',
    pointerEvents: 'none',
    opacity: 0,
  },
};

class AppHeader extends Component {
  shouldComponentUpdate(newProps, newState) {
    if (! this.props.currentMonth) {
      if (newProps.currentMonth) {
        return true;
      }
    } else {
      if (
        (this.props.isLoading.length > 0 && newProps.isLoading.length === 0) ||
        (this.props.isLoading.length === 0 && newProps.isLoading.length > 0)
      ) {
        return true;
      }

      if (this.props.currentMonth.code !== newProps.currentMonth.code) {
        return true;
      }
    }

    if (this.props.location.pathname !== newProps.location.pathname) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <div style={styles.base}>
        <AppBar
          title="Xpenses - Draft"
          style={styles.header}
          showMenuIconButton={false}
          iconElementRight={this.renderDropdownMenu()}
          iconStyleRight={styles.icon}
          zDepth={0}
        />
      </div>
    );
  }

  renderDropdownMenu() {
    const isLoading = !! (! this.props.currentMonth || ! this.props.months || this.props.isLoading.length);

    const loaderStyle = isLoading
      ? { ...styles.loader, visibility: 'visible', opacity: 1, }
      : styles.loader;

    return (
      <div style={styles.dropdownWrapper}>
        <DropDownMenu
          value={this.props.currentMonth ? this.props.currentMonth.code : 0}
          style={styles.dropdown}
          labelStyle={styles.dropdownLabel}
          underlineStyle={styles.dropdownUnderline}
          >
          {this.props.months.map(this.renderDropdownMenuItem)}
        </DropDownMenu>

        <CircularProgress
          color="#fff"
          size={.5}
          style={loaderStyle}
          />
      </div>
    );
  }

  renderDropdownMenuItem = (month) => {
    const currentPath = this.props.location.pathname.split('/');
    const currentLocation = currentPath[currentPath.length - 1];

    return (
      <MenuItem
        value={month.code}
        primaryText={month.description}
        key={month.id}
        style={styles.dropdownMenu}
        href={this.props.router.createHref(`${month.code}/${currentLocation}`)}
        />
    );
  }
};

export default Radium(AppHeader);
