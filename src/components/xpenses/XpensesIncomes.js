import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

import { TableRow, TableRowColumn } from 'material-ui/Table';
import { green50 } from 'material-ui/styles/colors';

import AppTable from '../app/AppTable';

import { xpensesFetchIncomes } from '../../data/actions/xpenses/incomes-actions';

class XpensesIncomes extends Component {
  componentWillReceiveProps(newProps) {
    if (this.props.month && newProps.month.id == this.props.month.id) {
      return false;
    }

    this.props.fetchIncomes(newProps.month.code);
  }

  render() {
    if (! this.props.data) {
      return <span>Nenhuma entrada encontrada</span>;
    }

    return (
      <AppTable headers={[ 'Valor', 'Descrição', 'Data', ]}>
        {this.props.data.map(this.renderIncomeRow)}
      </AppTable>
    );
  }

  renderIncomeRow(income, index) {
    const style = income.received
      ? { backgroundColor: green50 }
      : {};

    return (
      <TableRow key={index} style={style}>
        <TableRowColumn>{income.value}</TableRowColumn>
        <TableRowColumn>{income.description}</TableRowColumn>
        <TableRowColumn>{income.date}</TableRowColumn>
      </TableRow>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    ...state.xpenses.incomes,
    month: state.app.currentMonth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIncomes: (monthCode) => dispatch(xpensesFetchIncomes(monthCode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(XpensesIncomes);
