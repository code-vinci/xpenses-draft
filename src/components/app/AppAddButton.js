import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import { green600, green800 } from 'material-ui/styles/colors';

class AppAddButton extends Component {
  render() {
    return (
      <FlatButton
        label="Adicionar"
        backgroundColor={green600}
        hoverColor={green800}
        style={{ borderRadius: 0, height: 48, lineHeight: '48px', }}
        labelStyle={{ color: '#fff' }}
        href={this.props.href}
        />
    );
  }
}

export default AppAddButton;
