import React from 'react';
import PropTypes from 'prop-types';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const alertPanel = event => {
   alert('Got clicked!' + event.target.text);
};

const Items = ({config}) => {
   let index = 1;
   let navItems = config.map((item) => {
      if (!item.sub) {
         return (<NavItem key={index++} href="#">{item.title}</NavItem>);

      } else {
         let subMenu = item.sub.map((subItem) => {
            return <MenuItem key={index++} onClick={alertPanel}>{subItem.title}</MenuItem>;
         });

         return (
            <NavDropdown key={index++} title={item.title} id="basic-nav-dropdown">
               {subMenu}
            </NavDropdown>
         );
      }
   });

   return <Nav>{navItems}</Nav>;

};

Items.propTypes = {
   config: PropTypes.array
};

export default Items;