import React, { Component } from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';

import { green400, green800 } from 'material-ui/styles/colors';

import XpensesBalance from '../xpenses/XpensesBalance';
import XpensesIncomes from '../xpenses/XpensesIncomes';
import XpensesOutcomes from '../xpenses/XpensesOutcomes';

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
  },

  tabs: {
    backgroundColor: green400,
    flexShrink: 0,
  },

  ink: {
    backgroundColor: green800,
  },

  content: {
    flex: 1,
    overflowY: 'overlay',
  },
};

class AppContentSection extends Component {
  render() {
    return (
      <Tabs
        style={styles.base}
        tabItemContainerStyle={styles.tabs}
        inkBarStyle={styles.ink}
        contentContainerStyle={styles.content}
        initialSelectedIndex={1}
        >
        <Tab label="Balanço">
          <XpensesBalance />
        </Tab>
        <Tab label="Entradas">
          <XpensesIncomes />
        </Tab>
        <Tab label="Saídas">
          <XpensesOutcomes />
        </Tab>
      </Tabs>
    );
  }
};

export default AppContentSection;
