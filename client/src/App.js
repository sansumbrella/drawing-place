import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const writeImage = async (img) => {
  const result = await fetch("http://localhost:4040/save-image", {
    method: "POST",
    body: img,
  });
  const body = await result.text();
  console.log("Server response:", result, body);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => writeImage("hello")}>Save image</button>
      </div>
    );
  }
}

export default App;
