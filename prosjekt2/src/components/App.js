import React, { Component } from 'react';
import Sidebar from './Sidebar.js'
import Topbar from './Topbar.js'
import Header from './Header.js'


import '../styles/App.css';
import Gallery from "./Gallery";

class App extends Component {

    // Constructor
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

    // Add listener for resize event to ensure functionality
    // only slides on small screens
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    // Keeps track of whether or not the device screen is small.
    resize() {
        this.setState({
            smallScreen: window.innerWidth <= 780,
            isMenuHidden: window.innerWidth <= 780,
        });
    }

    // Update state to toggle topbar on small devices
    menuToggle(){
        this.setState(state => ({ isMenuHidden: !state.isMenuHidden }));
    }

    // Triggers when one of the categories has changed. Updates gallery with new images, texts and audio.
    // Also keeps track of which categories are chosen so the correct files are fetched when the tab changes.
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

    // Triggers when the tab has changed. Updates gallery with new images, texts and audio.
    // Also keeps track of which tab is chosen so the correct files are fetched when a category changes.
    onTabChanged(index) {
        this.setState({tabIndex: index});
        this.fetchImage("/media/svg/" + this.state.categorySvg + "/" + index + ".svg");
        this.fetchText(this.state.categoryText, index);
        this.setState({audio: "/media/sound/" + this.state.categoryAudio + "/" + index + ".mp3"});
        if (window.innerWidth < 780) {
            this.setState({ isMenuHidden: true });
        }
    }

    // Keeps track of which svg-files are in the session storage and updates the svg image in the gallery
    async fetchImage(url) {
        if (sessionStorage.getItem(url) != null) {
            this.setState({svg: sessionStorage.getItem(url)});
        } else {
            const response = await fetch(url, {});
            const text = await response.text();
            this.setState({svg: text});
            sessionStorage.setItem(url, text);
        }
    }

    // Keeps track of which texts are in the session storage and updates the gallery text
    async fetchText(category, index) {
        if (sessionStorage.getItem("text-" + category + index) != null) {
            this.setState({text: sessionStorage.getItem("text-" + category + index)});
        } else {
            const response = await fetch("/media/text/text.json", {});
            const text = await response.json();
            this.setState({text: text[category][index]});
            sessionStorage.setItem("text-" + category + index, text[category][index]);
        }
    }

    render() {
        return (
          <div className="grid-wrapper">
              <Header onMenuToggle={this.menuToggle} isMenuHidden={this.state.isMenuHidden}/>
              <Topbar onTabChanged={this.onTabChanged} isMenuHidden={this.state.isMenuHidden} tabIndex={this.state.tabIndex}/>
              <Sidebar onChange={this.onCategoryChanged} smallScreen={this.state.smallScreen}/>
              <Gallery svg={this.state.svg} text={this.state.text} audio={this.state.audio} />
          </div>
        );
    }
}

export default App;
