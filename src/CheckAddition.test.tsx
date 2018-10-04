import { shallow } from 'enzyme';
import 'jest-enzyme';
import * as React from 'react';
import CheckAddition from './CheckAddition';

it('renders without crashing', () => {
  shallow(<CheckAddition />);
});

it('renders equation input', () => {
  const wrapper = shallow(<CheckAddition />);
  const input = 
    <div>
      <label htmlFor="equationInput">Equation:</label>
      <input name="equation" id="equationInput" />
    </div>;
  expect(wrapper).toContainReact(input);
});
