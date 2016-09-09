import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';
import DropDownMenu from 'material-ui/DropDownMenu';

import './Home.css';

import { green500, green400 } from 'material-ui/styles/colors';

const styles = {
  AppBackgroundBar: {
    backgroundColor: green500,
  },
  AppContentBar: {
    backgroundColor: green400,
  },
  AppContentSidebar: {
    position: 'relative',
    transform: 'none',
  },
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpened: false,
    }
  }

  render() {
    return (
      <div>
        <div
          className="AppBackgroundBar"
          style={styles.AppBackgroundBar}
          ></div>

        <Paper
          className="AppContent"
          zDepth={1}
        >
          <AppBar
            className="AppContentBar"
            title="Xpenses - Draft"
            style={styles.AppContentBar}
            showMenuIconButton={false}
            iconElementRight={
              <DropDownMenu value={1} labelStyle={{ color: '#fff'}}>
                <MenuItem value={1} primaryText="Janeiro" />
                <MenuItem value={2} primaryText="Fevereiro" />
                <MenuItem value={3} primaryText="Março" />
              </DropDownMenu>
            }
          />
        </Paper>
      </div>
    );
  }
};

export default Home;
