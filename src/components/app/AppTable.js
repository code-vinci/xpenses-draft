import React, { Component } from 'react';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  fixed: {
    overflowY: 'overlay',
    flex: 1,
  },
  table: {
    height: 36,
  },
  header: {
    height: 36,
    paddingLeft: 20,
    paddingRight: 20,
  },
};

class AppTable extends Component {
  render() {
    return (
      <Table
        selectable={false}
        style={styles.table}
        wrapperStyle={styles.base}
        bodyStyle={this.props.fixed ? styles.fixed : {}}
        >
        <TableHeader
          displaySelectAll={this.props.displaySelect || false}
          adjustForCheckbox={this.props.displaySelect || false}
          >
          <TableRow style={styles.table}>{this.renderHeaderRows()}</TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={this.props.displaySelect || false}>
          {this.props.children}
        </TableBody>
      </Table>
    );
  }

  renderHeaderRows() {
    if (! this.props.headers) {
      return false;
    }

    return this.props.headers.map((header, index) => <TableHeaderColumn style={styles.header} key={index}>{header}</TableHeaderColumn>);
  }
}

export default AppTable;
