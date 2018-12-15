// ESLint Exceptions
/* global it, expect */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

it('App renders without crashing', () => {
  const component = Enzyme.shallow(<App />);
  expect(component.exists()).toEqual(true);
});
