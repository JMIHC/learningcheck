import * as React from 'react';
import './CheckAddition.css';

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
        <div>{this.answerIsCorrect()}</div>
      </div>
    );
  }

  private handleChangeEvent = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const value = target.type === 'checkbox' ? target.checked : target.type === 'number' ? parseInt(target.value, 10) : target.value;
    const name = target.name;
    this.setState({...this.state, [name]: value});
  }

  private answerIsCorrect(): string {
    if(this.state.leftFactor && this.state.rightFactor && this.state.answer) {
      const actualAnswer = this.state.leftFactor + this.state.rightFactor;
      if (actualAnswer === this.state.answer) {
        return "CORRECT!";
      } else {
        return "try again";
      }
    }

    return "";
  }

}

export default CheckAddition;
