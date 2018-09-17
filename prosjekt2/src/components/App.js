import React, { Component } from 'react';
import Sidebar from './Sidebar.js'
import Topbar from './Topbar.js'
import Header from './Header.js'


import '../styles/App.css';
import Gallery from "./Gallery";

class App extends Component {

    constructor(props) {
        super(props);
        this.onCategoryChanged = this.onCategoryChanged.bind(this);
        this.onTabChanged = this.onTabChanged.bind(this);
        this.fetchImage = this.fetchImage.bind(this);
        this.fetchText = this.fetchText.bind(this);
        this.state = {
            svg: "No svg found",
            text: "No text specified",
            audio: "No audio specified",
            categoryAudio: "dog",
            categorySvg: "dog",
            categoryText: "dog",
            tabIndex: 0,
        }
    }

    onCategoryChanged(group, value) {
        let url;
        switch (group) {
            case "svg":
                url = "/media/" + group + "/" + value + ".svg";
                this.fetchImage(url);
                this.setState({categorySound: value});
                break;
            case "text":
                url = "/media/" + group + "/" + value + ".txt";
                this.fetchText(url);
                this.setState({categoryText: value});
                break;
            case "audio":
                url = "/media/" + group + "/" + value + ".mp3";
                this.setState({audio: url});
                this.setState({categoryAudio: value});
                break;
            default:
                console.log("Received unsupported group: " + group);
                break;
        }

        console.log(url);
    }

    onTabChanged(index) {
        console.log(index);
        this.setState({tabIndex: index});
        this.fetchImage("/media/svg/" + this.state.categorySvg + "/" + index + ".svg");
        this.fetchText("/media/text/" + this.state.categoryText + "/" + index + ".txt");
        this.setState({audio: "/media/audio/" + this.state.categoryAudio + "/" + index + ".mp3"});
    }

    async fetchImage(url) {
        const response = await fetch(url, {});
        const text = await response.text();

        this.setState({svg: text});
    }

    async fetchText(url) {
        const response = await fetch(url, {});
        const text = await response.text();

        this.setState({text: text});
    }

    render() {
    return (
      <div className="grid-wrapper">
          <Header/>
          <Topbar onTabChanged={this.onTabChanged}/>
          <Sidebar onChange={this.onCategoryChanged}/>
          <Gallery svg={this.state.svg} text={this.state.text} audio={this.state.audio} />
      </div>
    );
    }
}

export default App;
