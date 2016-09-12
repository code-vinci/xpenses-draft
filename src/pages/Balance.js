import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { green50, red50 } from 'material-ui/styles/colors';

import AppTable from '../components/app/AppTable';
import AppError from '../components/app/AppError';

const styles = {
  base: {
    flex: 1,
  },

  balance: {
    display: 'inline-block',
    padding: 20,
    margin: 20,
    minWidth: 200,
  },

  title: {
    margin: '0 0 10px 0',
  },
};

class Balance extends Component {
  render() {
    if (! this.props.isLoading && ! this.props.balance) {
      return <AppError>Nenhum balanço encontrado</AppError>;
    }

    return (
      <div style={styles.base}>
        <AppTable headers={[ '', 'Entradas', 'Saídas', 'Sobra' ]}>
          {Object.keys(this.props.balance).map(this.renderBalance)}
        </AppTable>
      </div>
    );
  }

  renderBalance = (key) => {
    const result = this.props.balance[key].incomes - this.props.balance[key].outcomes;
    const style = result > 0
      ? { backgroundColor: green50 }
      : { backgroundColor: red50 };

    return (
      <TableRow key={key} style={style}>
        <TableHeaderColumn>Balanço {key === 'total' ? 'Total' : 'Atual'}</TableHeaderColumn>
        <TableRowColumn>{this.props.balance[key].incomes}</TableRowColumn>
        <TableRowColumn>{this.props.balance[key].outcomes}</TableRowColumn>
        <TableRowColumn>{result}</TableRowColumn>
      </TableRow>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    balance: state.balance,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Balance);
