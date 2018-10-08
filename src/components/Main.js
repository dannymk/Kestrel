import React from 'react';
import PropTypes from 'prop-types';
import NavigationTop from './navigation/NavigationTop';
import BlankPanel from './panels/Blank';

const Main = ({menus}) => {
   return (
      <div>
         <NavigationTop menus={menus} />
         <BlankPanel title="First Panel" content="Basic content..." />
      </div>
   );
};

Main.propTypes = {
   menus: PropTypes.array
};

export default Main;