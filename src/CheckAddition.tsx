import * as React from 'react';
import './CheckAddition.css';

class CheckAddition extends React.Component {
  public render() {
    return (
      <div className="CheckAddition">
        <div>
          <label htmlFor="equationInput">Equation:</label>
          <input name="equation" id="equationInput" />
        </div>
      </div>
    );
  }
}

export default CheckAddition;
