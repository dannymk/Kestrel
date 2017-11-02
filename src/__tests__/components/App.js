import React from 'react';
import {shallow} from 'enzyme';
import App from '../../components/App';

const app = shallow(<App />);

test("App renderes correctly", () => {
   expect(app).toMatchSnapshot();
});