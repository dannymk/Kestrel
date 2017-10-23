import React from 'react';
import PropTypes from 'prop-types';
import NavigationTop from './navigation/NavigationTop';
import BlankPanel from './panels/Blank';

const Main = ({items}) => {
   return (
      <div>
         <NavigationTop items={items} />
         <BlankPanel title="First Panel" content="Basic content..." />
      </div>
   );
};

Main.propTypes = {
   items: PropTypes.array
};

export default Main;