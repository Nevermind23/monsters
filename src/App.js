import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class App extends Component {
    constructor() {
        super();

        this.state = {
            text: 'oh wow...'
        }
    }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                {this.state.text}
            </p>
            <button onClick={() => {
                this.setState({
                    text: 'huh'
                })
            }}>Change text</button>
          </header>
        </div>
    );
  }
}

export default App;
