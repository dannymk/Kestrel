'use strict';

import React from 'react';
import {Navbar} from 'react-bootstrap';

require('styles/navigation/Header.less');

export default class HeaderComponent extends React.Component {
  render() {
    // Return an empty div if we do not get any content to display
    if ( ! this.props.config ){
      return <div />
    }
    return (
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">{this.props.config.name}</a>
        </Navbar.Brand>
      </Navbar.Header>
    );
  }
}
