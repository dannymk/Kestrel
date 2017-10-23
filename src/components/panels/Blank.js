import React from 'react';
import PropTypes from 'prop-types';
import {Panel} from 'react-bootstrap';

const BlankComponent = props => {
    let title = (
        <h3>{props.title}</h3>
    );
  
    return (
      <Panel header={title} className="blank-component">
        {props.content}
        
        {props.display}
        <br />
        <br />
        Carlos: {props.carlos}
      </Panel>
    );  
    
};

BlankComponent.propTypes = {
   title: PropTypes.string,
   content: PropTypes.string,
   display: PropTypes.object   
};

export default BlankComponent;