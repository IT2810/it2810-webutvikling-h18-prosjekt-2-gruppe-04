import React, { Component } from 'react';
import Sidebar from './Sidebar.js'
import '../styles/App.css';
import Gallery from "./Gallery";

class App extends Component {
  render() {
    return (
      <div className="grid-wrapper">
          <div className="header">
          </div>
          <div className="topbar">
          </div>
          <Sidebar/>
          <Gallery/>
      </div>
    );
  }
}

export default App;
