require('normalize.css/normalize.css');
require('styles/App.css');

import React, {Component} from 'react';
import NavigationTopComponent from './navigation/NavigationTopComponent';

export default class AppComponent extends Component {
  render() {
    return (
        <NavigationTopComponent name={this.props.name} />
    );
  }
}

AppComponent.defaultProps = {
   name: 'Carlos'
};
