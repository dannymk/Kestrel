import React from 'react';
import PropTypes from 'prop-types';
import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button';
import {InputText} from "primereact/inputtext";

const NavigationTop = ({menus}) => {
   return (
      <Menubar model={menus}>
          <InputText placeholder="Search" type="text" />
          <Button label="Logout" icon="pi pi-power-off" className="p-button-danger" style={{marginLeft:4}} />
      </Menubar>
   );
};

NavigationTop.propTypes = {
   menus: PropTypes.array,
   header: PropTypes.object
};

export default NavigationTop;