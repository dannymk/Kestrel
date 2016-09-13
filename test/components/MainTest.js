/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import { mount } from 'enzyme';

import Main from 'components/Main';

describe('<Main />', () => {
  let component;

  beforeEach(() => {
    component = mount(<Main />);
  });

  // describe('when initializing the component', () => {
  //   it('should do something', () => {
  //     throw component.html(); // Debug only
  //   });
  // });

  it('should have its component name as index', () => {
    expect(component.find('div').first().hasClass('index')).to.equal(true);
  });

  it('should have the default property name of Carlos', () => {
    expect(Main.defaultProps.name).to.equal('Carlos');

  });


});
