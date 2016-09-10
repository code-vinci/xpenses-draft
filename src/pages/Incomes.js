import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TableRow, TableRowColumn } from 'material-ui/Table';
import { green50 } from 'material-ui/styles/colors';

import AppTable from '../components/app/AppTable';

class Incomes extends Component {
  render() {
    if (this.props.isLoading.length) {
      return false;
    };

    if (! this.props.incomes.length) {
      return <span>Nenhuma entrada encontrada</span>;
    }

    return (
      <AppTable headers={[ 'Valor', 'Descrição', 'Data', ]}>
        {this.props.incomes.map(this.renderIncomeRow)}
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
    incomes: state.incomes,
    isLoading: state.isLoading,
    month: state.currentMonth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Incomes);
