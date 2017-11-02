import React from 'react';
import PropTypes from 'prop-types';
import NavigationTop from './navigation/NavigationTop';
import BlankPanel from './panels/Blank';

const App = ({items}) => {
   return (
      <div>
         <NavigationTop items={items} />
         <BlankPanel title="First Panel" content="Basic content..." />
      </div>
   );
};

App.propTypes = {
   items: PropTypes.array
};

export default App;