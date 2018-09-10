import React, { Component } from 'react';
import Sidebar from './Sidebar.js'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="grid-wrapper">
          <div className="header">
          </div>
          <div className="topbar">
          </div>
          <Sidebar/>
          <div className="gallery">
          </div>
      </div>
    );
  }
}

export default App;
