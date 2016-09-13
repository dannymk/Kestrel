'use strict';

import React, { Component } from 'react';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

require('styles/navigation/Items.less');

export default class ItemsComponent extends Component {
  render() {
    if ( ! this.props.config ){
      return <div />
    }

    let index = 1;
    let config = this.props.config.map( (item) => {
        if ( ! item.sub ){
          return (<NavItem key={index++} href="#">{item.title}</NavItem>);

        }else{
          let subMenu = item.sub.map(( subItem ) => {
             return <MenuItem key={index++}>{subItem.title}</MenuItem>;
          });
          return (
             <NavDropdown key={index++} title={item.title} id="basic-nav-dropdown">
                {subMenu}
             </NavDropdown>
          );
        }
    });

    return (
      <Nav>
         {config}
      </Nav>
    );
  }
}
