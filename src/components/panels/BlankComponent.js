'use strict';
import React from 'react';
import {Panel} from 'react-bootstrap';

require('styles/panels/Blank.css');
let BlankComponent = (props) => {
  let title = (
      <h3>{props.title}</h3>
  );

  return (
    <Panel header={title} className="blank-component">
      {props.content}
    </Panel>
  )
}

BlankComponent.displayName = 'PanelsBlankComponent';

// Uncomment properties you need
// BlankComponent.propTypes = {};
// BlankComponent.defaultProps = {};

export default BlankComponent;
