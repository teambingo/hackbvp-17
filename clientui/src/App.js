import React, { Component } from 'react';
import fp from './floor plan.jpg';
import fire from './fire.png';
import './App.css';
const DATA = {
  areas :['12','123','b101'],
  distasrertype: 'fire'
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Testing title here!
        </header>
        <img src={fp} className="App-logo" alt="logo" />
        <img src={fire} className="Fire-img" alt="funky" />
        <h1 className="App-title">Welcome to React</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;
