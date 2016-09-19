require('normalize.css/normalize.css');
require('styles/App.css');

import React, {Component} from 'react';
import axios from 'axios';
import NavigationTopComponent from './navigation/NavigationTopComponent';

export default class AppComponent extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
  }
  
  componentWillMount(){
    let self = this;
    axios.get('/mock/items.json')
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
        <NavigationTopComponent items={this.state.items} />
    );
  }
}