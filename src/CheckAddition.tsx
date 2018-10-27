import * as React from 'react';
import './CheckAddition.css';
import { CheckAdd } from './CheckFunctions'

export interface ICheckAdditionState {
  answer?: number;
  leftFactor?: number;
  rightFactor?: number;
}

class CheckAddition extends React.Component<object, ICheckAdditionState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div className="CheckAddition">
        <span>
          <input type="number" name="leftFactor" id="leftFactorInput" value={this.state.leftFactor} onChange={this.handleChangeEvent} />
          <span>&#43;</span>
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
    if(this.state && this.state.leftFactor && this.state.rightFactor && this.state.answer) {
      return <CheckAdd addends={[this.state.leftFactor,this.state.rightFactor]} sum={this.state.answer} />;
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

export default CheckAddition;
