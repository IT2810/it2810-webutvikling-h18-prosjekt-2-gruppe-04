import React, { Component } from 'react';
import Sidebar from './Sidebar.js'
import Topbar from './Topbar.js'
import Header from './Header.js'


import '../styles/App.css';
import Gallery from "./Gallery";

class App extends Component {
  render() {
    return (
      <div className="grid-wrapper">
          <Header/>
          <Topbar/>
          <Sidebar/>
          <Gallery/>
      </div>
    );
  }
}

export default App;
