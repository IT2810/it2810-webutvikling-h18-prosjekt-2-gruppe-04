import React, { Component } from 'react';
import Sidebar from './Sidebar.js'
import Topbar from './Topbar.js'
import Header from './Header.js'


import '../styles/App.css';
import Gallery from "./Gallery";

class App extends Component {

    constructor(props) {
        super(props);
        this.menuToggle = this.menuToggle.bind(this);
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
            isMenuHidden: false,
        }
    }

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
        } else {
            this.setState({ isMenuHidden: true });
        }
    }

    menuToggle(){
        this.setState(state => ({ isMenuHidden: !state.isMenuHidden }));
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
                url = "/media/" + group + "/" + value + "/" + this.state.tabIndex + ".mp3";
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
        this.setState({audio: "/media/sound/" + this.state.categoryAudio + "/" + index + ".mp3"});
        if (window.innerWidth < 780) {
            this.setState({ isMenuHidden: true });
        }
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
          <Header onMenuToggle={this.menuToggle} isMenuHidden={this.state.isMenuHidden}/>
          <Topbar onTabChanged={this.onTabChanged} isMenuHidden={this.state.isMenuHidden} tabIndex={this.state.tabIndex}/>
          <Sidebar onChange={this.onCategoryChanged}/>
          <Gallery svg={this.state.svg} text={this.state.text} audio={this.state.audio} />
      </div>
    );
    }
}

export default App;
