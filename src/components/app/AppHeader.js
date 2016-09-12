import React, { Component } from 'react';
import Radium from 'radium';

import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import CircularProgress from 'material-ui/CircularProgress';
import { green600 } from 'material-ui/styles/colors';

import AppLoader from './AppLoader';

const styles = {
  base: {
    color: '#fff',
  },

  header: {
    backgroundColor: green600,
    alignItems: 'center',
  },

  icon: {
    marginTop: 0,
    position: 'relative',
  },

  dropdown: {
    height: '100%',
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
};

class AppHeader extends Component {
  render() {
    return (
      <div
        style={styles.base}
        >
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
    if (! this.props.currentMonth || ! this.props.months) {
      return <CircularProgress
          color="#fff"
          size={.5}
          />
    }

    return (
      <DropDownMenu
        value={this.props.currentMonth ? this.props.currentMonth.code : 0}
        style={styles.dropdown}
        labelStyle={styles.dropdownLabel}
        underlineStyle={styles.dropdownUnderline}
        onChange={this.changeMonth}
        >
        {this.props.months.map(this.renderDropdownMenuItem)}
      </DropDownMenu>
    );
  }

  renderDropdownMenuItem(month) {
    return (
      <MenuItem
        value={month.code}
        primaryText={month.description}
        key={month.id}
        style={styles.dropdownMenu}
        />
    );
  }

  changeMonth = (event, key, monthCode) => {
    const currentPath = this.props.location.pathname.split('/');
    const currentLocation = currentPath[currentPath.length - 1];

    this.props.router.push(`/${monthCode}/${currentLocation}`);
  }
};

export default Radium(AppHeader);
