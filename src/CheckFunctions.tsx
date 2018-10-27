import * as React from 'react';

export const CheckAdd: React.SFC<{ addends: number[], sum: number }> = (props) => 
<p>{getCheckAddResponse(props)}</p>;

const adder = (accumulator: number, currentValue: number) => accumulator + currentValue;

function getCheckAddResponse(props:{ addends: number[], sum: number, errorCallback?: (name: Error) => void }): string {
    try {
        if (props.addends.length < 2) {
            return '';
        }

        const actualSum = props.addends.reduce(adder);
        if (actualSum === props.sum) {
            return 'Correct!';
        }
        return 'Try again';
    } catch (e) {
        if (props.errorCallback) {
            props.errorCallback(e);
        }
        throw e;
    }
}
