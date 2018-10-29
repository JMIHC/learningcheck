import * as React from 'react';
import { BrowserRouter as BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import CheckAddition from './CheckAddition';
import CheckSubtraction from './CheckSubtraction';

const Index = () => <h2>Home</h2>;
const Add = () => <CheckAddition/>;
const Subtract = () => <CheckSubtraction/>;

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Add/">Add</Link>
            </li>
            <li>
              <Link to="/Subtract/">Subtract</Link>
            </li>
          </ul>
        </nav>
  
        <Route path="/" exact={true} component={Index} />
        <Route path="/Add/" component={Add} />
        <Route path="/Subtract/" component={Subtract} />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
