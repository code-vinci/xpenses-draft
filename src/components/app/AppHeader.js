import React, { Component } from 'react';
import Radium from 'radium';

import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

import { green600 } from 'material-ui/styles/colors';

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
  constructor(props, context) {
    super(props);
  }

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
      return <div></div>;
    }

    return (
      <DropDownMenu
        value={this.props.currentMonth.code}
        style={styles.dropdown}
        labelStyle={styles.dropdownLabel}
        underlineStyle={styles.dropdownUnderline}
        onChange={this.changeMonth}
        >
        {this.props.months.map((month) => {
          return (
            <MenuItem
              value={month.code}
              primaryText={month.description}
              key={month.id}
              style={styles.dropdownMenu}
              />
          );
        })}
      </DropDownMenu>
    );
  }

  changeMonth = (event, key, monthCode) => {
    this.context.router.push(`/${monthCode}/balance`);
  }
};

AppHeader.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Radium(AppHeader);
