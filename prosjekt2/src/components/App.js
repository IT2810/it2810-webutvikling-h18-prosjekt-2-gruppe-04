import React, { Component } from 'react';
import Sidebar from './Sidebar.js'
import Topbar from './Topbar.js'
import Header from './Header.js'


import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="grid-wrapper">
          <Header/>
          <Topbar/>
          <Sidebar/>
          <div className="gallery">
          </div>
      </div>
    );
  }
}

export default App;
