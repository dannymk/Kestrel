require('normalize.css/normalize.css');
require('styles/App.css');

import React, {Component} from 'react';
import config from 'config';
import axios from 'axios';
import NavigationTopComponent from './navigation/NavigationTopComponent';
import BlankPanel from './panels/BlankComponent';

export default class AppComponent extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
  }
  
  componentWillMount(){
    let self = this;
    axios.get(config.items)
      .then(function (response) {
        self.setState({
          items: response.data
        })
      })
      .catch(function (error) {
        window.console.log(error);
      });
  }
  
  render() {
    return (
      <div>
        <NavigationTopComponent items={this.state.items} />
        <BlankPanel title="First Panel" content="Basic content..." />
      </div>
    );
  }
}