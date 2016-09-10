import React, { Component } from 'react';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';

class AppTable extends Component {
  render() {
    return (
      <Table>
        <TableHeader displaySelectAll={this.props.displaySelect || false} adjustForCheckbox={this.props.displaySelect || false}>
          <TableRow>{this.renderHeaderRows()}</TableRow>
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

    return this.props.headers.map((header, index) => <TableHeaderColumn key={index}>{header}</TableHeaderColumn>);
  }
}

export default AppTable;
