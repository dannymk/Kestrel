import React from 'react';
import PropTypes from 'prop-types';
import {Navbar} from 'react-bootstrap';
import Header from './Header';
import Items from './Items';

const NavigationTop = ({header = {}, items}) => {
   return (
      <Navbar className="text-left">
         <Header config={header} />
         <Items config={items} />
      </Navbar>
   );
};

NavigationTop.propTypes = {
   items: PropTypes.array,
   header: PropTypes.object
};

export default NavigationTop;