import * as React from 'react';
import './CheckAddition.css';
import { CheckAdd } from './CheckFunctions'

import { Container, Form, FormGroup } from 'reactstrap';

export interface ICheckAdditionState {
  answer: number;
  leftFactor: number;
  rightFactor: number;
}

class CheckAddition extends React.Component<object, ICheckAdditionState> {
  constructor(props: any) {
    super(props);
    this.state = {leftFactor: 0, rightFactor: 0, answer: 0 };
  }

  public render() {
    return (
      <Container>
      <div className="CheckAddition">
      <Form>
        <FormGroup>
          <input type="number" name="leftFactor" id="leftFactorInput" value={this.state.leftFactor} onChange={this.handleChangeEvent} />
          <span>&#43;</span>
          <input type="number" name="rightFactor" id="rightFactorInput" value={this.state.rightFactor} onChange={this.handleChangeEvent} />
        </FormGroup>
        <FormGroup>
          <label htmlFor="answerInput">Answer:</label>
          <input type="number" name="answer" id="answerInput" value={this.state.answer} onChange={this.handleChangeEvent} />
        </FormGroup>
        <div>{this.checkAnswer()}</div>
        </Form>
      </div>
      </Container>
    );
  }

  private checkAnswer(): JSX.Element {
    if(this.state && !isNaN(this.state.leftFactor) && !isNaN(this.state.rightFactor) && !isNaN(this.state.answer)) {
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
