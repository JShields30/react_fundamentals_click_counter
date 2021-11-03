import React, { Component } from 'react';
import './App.css';
import "./index.js";
class App extends Component {
  render() {
    return (
    <div onClick={this.props.onClick}>This div has been clicked {this.props.clicks} times.</div>
  );
}
}


export default App;
