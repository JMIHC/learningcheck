import { shallow } from 'enzyme';
import 'jest-enzyme';
import * as React from 'react';
import CheckAddition from './CheckAddition';

it('renders without crashing', () => {
  shallow(<CheckAddition />);
});
