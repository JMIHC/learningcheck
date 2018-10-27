import * as ez from 'enzyme';
import * as React from 'react';
import { CheckAdd } from './CheckFunctions'

it('renders without crashing', () => {
    ez.shallow(<CheckAdd addends={[1,2]} sum={3} />);
});

it('says "Correct!" when addends\' sum to sum', () => {
    const _ = ez.shallow(<CheckAdd addends={[1,2]} sum={3} />);
    expect(_.text()).toEqual('Correct!');
});

it('says "Try again" when addends\' don\'t sum to sum', () => {
    const _ = ez.shallow(<CheckAdd addends={[1,2]} sum={12} />);
    expect(_.text()).toEqual('Try again');
});

it('says "" if any params are missing', () => {
    const _ = ez.shallow(<CheckAdd addends={[1]} sum={3} />);
    expect(_.text()).toEqual('');
});