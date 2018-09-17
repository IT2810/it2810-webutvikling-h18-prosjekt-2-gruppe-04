import React, { Component } from 'react';
import Sidebar from './Sidebar.js'
import Topbar from './Topbar.js'
import Header from './Header.js'


import '../styles/App.css';
import Gallery from "./Gallery";

class App extends Component {
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }
    resize() {

        if (window.innerWidth > 780) {
            this.setState({ isMenuHidden: false });
        }
        else{
            this.setState({ isMenuHidden: true });
        }
    }

    constructor(props){
        super(props);
        this.menuToggle = this.menuToggle.bind(this);
        this.state = {isMenuHidden:false}
    }
    menuToggle(){
        this.setState(state => ({ isMenuHidden: !state.isMenuHidden }));
    }


  render() {
    return (
      <div className="grid-wrapper">
          <Header onMenuToggle={this.menuToggle} isMenuHidden={this.state.isMenuHidden}/>
          <Topbar isMenuHidden={this.state.isMenuHidden}/>
          <Sidebar/>
          <Gallery/>
      </div>
    );
  }
}

export default App;
