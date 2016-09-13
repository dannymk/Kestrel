'use strict';
import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import Header from './HeaderComponent';
import Items from './ItemsComponent';

require('styles//NavigationTop.less');
export default class NavigationTopComponent extends Component {
  render() {
    return (
      <Navbar className="text-left">
          <Header config={this.props.header} />
          <Items config={this.props.items} />
      </Navbar>
    );
  }
}

NavigationTopComponent.defaultProps = {
//  header: { name: 'Testing' },
  items: [
    {
      title: 'Bear',
      sub: [
        {
          title: 'Sub One'
        },
        {
          title: 'Sub One two'
        }
      ]
    },
    {
      title: 'Cow'
    }
  ]
};
