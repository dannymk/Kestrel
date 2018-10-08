import React from 'react';
import PropTypes from 'prop-types';
import {Menubar} from 'primereact/menubar';

const NavigationTop = ({menus}) => {
   return (
      <Menubar model={menus}>
      </Menubar>
   );
};

NavigationTop.propTypes = {
   menus: PropTypes.array,
   header: PropTypes.object
};

export default NavigationTop;