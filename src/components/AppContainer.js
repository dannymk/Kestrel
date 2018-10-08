import React, { Component } from 'react';
import {connect} from 'react-redux';
import App from './App';

// This is kind of a duplication just for testing purposes
export class AppContainer extends Component {
   render() {
      return <App {...this.props} />;
   }
};

const mapStateToProps = (state) => {
   return {
        
   }; 
};

const mapDispatchToProps = (dispatch, props) => {
   
};

export default connect(mapStateToProps, mapDispatchToProps)(App);