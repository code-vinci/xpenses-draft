import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TableRow, TableRowColumn } from 'material-ui/Table';
import { red50 } from 'material-ui/styles/colors';

import AppTable from '../components/app/AppTable';

class Outcomes extends Component {
  render() {
    if (! this.props.outcomes.length && ! this.props.isLoading) {
      return <span>Nenhuma saída encontrada</span>;
    }

    return (
      <AppTable headers={[ 'Valor', 'Descrição', 'Data', ]}>
        {this.props.outcomes.map(this.renderOutcomeRow)}
      </AppTable>
    );
  }

  renderOutcomeRow(income, index) {
    const style = income.paid
      ? { backgroundColor: red50 }
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
    outcomes: state.outcomes,
    isLoading: state.isLoading,
    month: state.currentMonth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Outcomes);
