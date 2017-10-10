import React, { Component } from 'react';
import fp from './floor plan.jpg';
import fire from './fire.png';
import './App.css';
//import axios from 'axios';
import firebase from 'firebase';

class App extends Component {
  state = { showExtraFire:false};
  componentWillMount() {
    //setTimeout(() => { this.setState({showExtraFire: true}); }, 3000);
    //axios.post('https://localhost:5000/call',{phoneNumber: 9643698769, salesNumber  : 9999875562});
    var config = {
      apiKey: "AIzaSyCOmubrc3gEd6LOW5UfRH5LVaL-GFgRCgk",
      authDomain: "not-so-awesome-project-45a2e.firebaseapp.com",
      databaseURL: "https://not-so-awesome-project-45a2e.firebaseio.com",
      projectId: "not-so-awesome-project-45a2e",
      storageBucket: "not-so-awesome-project-45a2e.appspot.com",
      messagingSenderId: "481329884022"
    };
    firebase.initializeApp(config);
    firebase.database().ref('/data').on("value", snapshot => {
      let data = snapshot.val();
      console.log(data);
      console.log(snapshot.val().Areas);
      for(let i in data) {
        console.log(data[i]);
        if(data[i].Areas === undefined)
          this.setState({showExtraFire: false});
        else
          this.setState({showExtraFire: true});
      }
    });
  }
  extraFire() {
    if(this.state.showExtraFire === true) {
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
