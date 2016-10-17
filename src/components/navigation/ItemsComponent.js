'use strict';
import React from 'react';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

require('styles/navigation/Items.less');

const alertPanel = event => {
    alert('Got clicked!' + event.target.text);
}

export default props => {
  if ( ! props.config ){
    return <div />
  }

  let index = 1;
  let config = props.config.map( (item) => {
      if ( ! item.sub ){
        return (<NavItem key={index++} href="#">{item.title}</NavItem>);

      }else{
        let subMenu = item.sub.map(( subItem ) => {
           return <MenuItem key={index++} onClick={alertPanel}>{subItem.title}</MenuItem>;
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
