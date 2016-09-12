import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TableRow, TableRowColumn } from 'material-ui/Table';
import { green50 } from 'material-ui/styles/colors';

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

class Incomes extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    if (this.props.isLoading.length) {
      return false;
    };

    if (! this.props.incomes.length) {
      return <AppError>Nenhuma entrada encontrada</AppError>;
    }

    if (this.props.children) {
      return this.props.children;
    }

    return (
      <div style={styles.base}>
        <AppTable headers={[ 'Valor', 'Descrição', 'Data', ]}>
          {this.props.incomes.map(this.renderIncomeRow)}
        </AppTable>

        <AppAddButton href={this.context.router.createHref(`${this.props.month.code}/incomes/add`)} />
      </div>
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

Incomes.contextTypes = {
  router: React.PropTypes.object.isRequired
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
