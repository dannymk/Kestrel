'use strict';
import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import { connect } from 'react-redux';
import { errors,amid } from '../../actions/index';

require('styles/panels/Blank.css');
class BlankComponent extends Component{
  componentDidMount(){
    this.props.errors('Daniel');
    this.props.amid();
  }
  
  render(){
    let title = (
        <h3>{this.props.title}</h3>
    );
  
    return (
      <Panel header={title} className="blank-component">
        {this.props.content}
        
        {this.props.display}
        <br />
        <br />
        Carlos: {this.props.carlos}
      </Panel>
    )
  }
  
}

function mapStateToProps(state){
  return {
    display: state.errors,
    carlos: state.greetings
  };
}

export default connect(mapStateToProps, {errors,amid})(BlankComponent);