import React, { Component } from 'react';
import Radium from 'radium';
import SwipeableViews from 'react-swipeable-views';

import {Tabs, Tab} from 'material-ui/Tabs';

import { green300, green800 } from 'material-ui/styles/colors';

const styles = {
  base: {
    backgroundColor: green300,
    height: 64,
  },

  ink: {
    backgroundColor: green800,
  },

  tab: {
    height: 64,
  },

  content: {
    padding: 20,
  },
};

class AppContentSection extends Component {
  render() {
    return (
      <Tabs
        tabItemContainerStyle={styles.base}
        inkBarStyle={styles.ink}
        contentContainerStyle={styles.content}
      >
        <Tab style={styles.tab} label="Balanço"><h2>Balanço</h2></Tab>
        <Tab style={styles.tab} label="Entradas"><h2>Entradas</h2></Tab>
        <Tab style={styles.tab} label="Saídas"><h2>Saídas</h2></Tab>
      </Tabs>
    );
  }
};

export default Radium(AppContentSection);
