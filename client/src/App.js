import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const writeImage = async (img) => {
  const type = "img/png";
  const result = await fetch("http://localhost:4040/save-image", {
    method: "POST",
    body: img.toDataURL(type),
  });
  const body = await result.text();
  console.log("Server response:", result, body);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    console.log("mounted");
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    for (let i = 0; i < 50; i += 1) {
      const w = Math.ceil(Math.random() * 50 + 50);
      const h = Math.ceil(Math.random() * 50 + 50);
      const x = Math.random() * canvas.width - w;
      const y = Math.random() * canvas.height - h;
      ctx.fillRect(x, y, w, h);
    }
  }
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
        <canvas width="640" height="480" ref={this.canvasRef}></canvas>
        <button onClick={() => writeImage(this.canvasRef.current)}>Save image</button>
      </div>
    );
  }
}

export default App;
