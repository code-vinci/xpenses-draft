import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TableRow, TableRowColumn } from 'material-ui/Table';
import { red50 } from 'material-ui/styles/colors';

import AppTable from '../components/app/AppTable';
import AppError from '../components/app/AppError';
import AppAddButton from '../components/app/AppAddButton';

const styles = {
  base: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
};

class Outcomes extends Component {
  render() {
    if (this.props.isLoading.length) {
      return false;
    };

    if (! this.props.outcomes.length) {
      return <AppError>Nenhuma saída encontrada</AppError>;
    }

    return (
      <div style={styles.base}>
        <AppTable headers={[ 'Valor', 'Descrição', 'Data', ]}>
          {this.props.outcomes.map(this.renderOutcomeRow)}
        </AppTable>

        <AppAddButton />
      </div>
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
