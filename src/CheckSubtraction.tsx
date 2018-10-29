import * as React from 'react';
import './CheckAddition.css';
import { CheckSubtract } from './CheckFunctions'

export interface ICheckSubtractionState {
  answer: number;
  leftFactor: number;
  rightFactor: number;
}

class CheckSubtraction extends React.Component<object, ICheckSubtractionState> {
  constructor(props: any) {
    super(props);
    this.state = {leftFactor: 0, rightFactor: 0, answer: 0 };
  }

  public render() {
    return (
      <div className="CheckSubtraction">
        <span>
          <input type="number" name="leftFactor" id="leftFactorInput" value={this.state.leftFactor} onChange={this.handleChangeEvent} />
          <span> minus </span>
          <input type="number" name="rightFactor" id="rightFactorInput" value={this.state.rightFactor} onChange={this.handleChangeEvent} />
        </span>
        <div>
          <label htmlFor="answerInput">Answer:</label>
          <input type="number" name="answer" id="answerInput" value={this.state.answer} onChange={this.handleChangeEvent} />
        </div>
        <div>{this.checkAnswer()}</div>
      </div>
    );
  }

  private checkAnswer(): JSX.Element {
    if(this.state && !isNaN(this.state.leftFactor) && !isNaN(this.state.rightFactor) && !isNaN(this.state.answer)) {
      return <CheckSubtract minuend={this.state.leftFactor} subtrahend={this.state.rightFactor} difference={this.state.answer} />;
    }
    return <div/>;
  }

  private handleChangeEvent = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const value = target.type === 'checkbox' ? target.checked : target.type === 'number' ? parseInt(target.value, 10) : target.value;
    const name = target.name;
    this.setState({...this.state, [name]: value});
  }

}

export default CheckSubtraction;
