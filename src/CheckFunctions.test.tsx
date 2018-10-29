import * as ez from 'enzyme';
import * as React from 'react';
import { CheckAdd, CheckSubtract } from './CheckFunctions'

describe('<CheckAdd />', () => {
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
});

describe('<CheckSubtract />', () => {
    it('renders without crashing', () => {
        ez.shallow(<CheckSubtract minuend={3} subtrahend={1} difference={2} />);
    });

    it('says "Correct!" when difference is correct', () => {
        const _ = ez.shallow(<CheckSubtract minuend={3} subtrahend={1} difference={2} />);
        expect(_.text()).toEqual('Correct!');
    });

    it('says "Try again" when difference is incorrect', () => {
        const _ = ez.shallow(<CheckSubtract minuend={3} subtrahend={1} difference={1} />);
        expect(_.text()).toEqual('Try again');
    });
});