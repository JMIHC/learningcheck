import { shallow } from 'enzyme';
import 'jest-enzyme';
import * as React from 'react';
import CheckSubtraction from './CheckSubtraction';

it('renders without crashing', () => {
  shallow(<CheckSubtraction />);
});
