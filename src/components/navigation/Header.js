import React from 'react';
import {Navbar} from 'react-bootstrap';

const Header = () => {
   return (
      <Navbar.Header>
         <Navbar.Brand>
            <a href="">{process.env.REACT_APP_name}</a>
         </Navbar.Brand>
      </Navbar.Header>
   );
};

export default Header;