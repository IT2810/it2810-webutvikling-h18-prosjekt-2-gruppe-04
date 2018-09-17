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
                url = "/media/" + group + "/" + value + "/" + this.state.tabIndex +  ".svg";
                this.fetchImage(url);
                this.setState({categorySvg: value});
                break;
            case "text":
                url = "/media/" + group + "/" + value + ".txt";
                this.fetchText(value, this.state.tabIndex);
                this.setState({categoryText: value});
                break;
            case "sound":
                url = "/media/" + group + "/" + value + "/" + this.state.tabIndex + ".wav";
                this.setState({audio: url});
                this.setState({categoryAudio: value});
                break;
            default:
                console.log("Received unsupported group: " + group);
                break;
        }
    }

    onTabChanged(index) {
        this.setState({tabIndex: index});
        this.fetchImage("/media/svg/" + this.state.categorySvg + "/" + index + ".svg");
        this.fetchText(this.state.categoryText, index);
        this.setState({audio: "/media/sound/" + this.state.categoryAudio + "/" + index + ".wav"});
    }

    async fetchImage(url) {
        const response = await fetch(url, {});
        const text = await response.text();

        this.setState({svg: text});
    }

    async fetchText(category, index) {
        const response = await fetch("/media/text/text.json", {});
        const text = await response.json();

        this.setState({text: text[category][index]});
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
