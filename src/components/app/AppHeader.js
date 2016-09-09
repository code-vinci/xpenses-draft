import React, { Component } from 'react';
import Radium from 'radium';

import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

import { green600 } from 'material-ui/styles/colors';

const styles = {
  base: {
    backgroundColor: green600,
    flex: 1,
    color: '#fff',
    alignSelf: 'flex-start',
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
};

const AppHeaderDropdownMenu = Radium((props) => {
  return (
    <DropDownMenu
      value={1}
      style={styles.dropdown}
      labelStyle={styles.dropdownLabel}
      underlineStyle={styles.dropdownUnderline}
    >
      <MenuItem value={1} primaryText="Janeiro" />
      <MenuItem value={2} primaryText="Fevereiro" />
      <MenuItem value={3} primaryText="Março" />
    </DropDownMenu>
  );
});

class AppHeader extends Component {
  render() {
    return (
      <AppBar
        title="Xpenses - Draft"
        style={styles.base}
        showMenuIconButton={false}
        iconElementRight={<AppHeaderDropdownMenu />}
        iconStyleRight={styles.icon}
        zDepth={0}
      />
    );
  }
};

export default Radium(AppHeader);
