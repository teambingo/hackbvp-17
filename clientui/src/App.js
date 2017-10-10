import React, { Component } from 'react';
import fp from './floor plan.jpg';
import fire from './fire.png';
import './App.css';

class App extends Component {
  state = { showExtraFire:false};
  componentWillMount() {
    setTimeout(() => { this.setState({showExtraFire: true}); }, 3000);
  }
  extraFire() {
    if(this.state.showExtraFire == true) {
      return(
        <div>
          <img src={fire} className="Fire-imge"  alt="logo" />
          <img src={fire} className="Fire-imge" alt="funky" />
        </div>
      );  
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          BURN! BURN! BURN like HELL!
        </header>
        <img src={fp} className="App-logo" alt="logo" />
        <img src={fire} className="Fire-img" alt="funky" />
        {this.extraFire()}
        <h1 className="App-title">Welcome to React</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;
