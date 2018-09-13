import React, { Component } from 'react';
import '../styles/Sidebar.css';
import CustomRadioButton from "./CustomRadioButton";

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavClosed: true,
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    toggleNav() {
        this.setState(state => ({isNavClosed: !state.isNavClosed}));
    }

    resize() {
        this.setState({
            smallScreen: window.innerWidth <= 780,
        });
    }

    render() {
        return (
            <div className="sidebar" style={{width: (this.state.isNavClosed && this.state.smallScreen) ? "0" : "20rem"}}>
                <div className="sidebar-radio-wrapper">
                    <h2 className="sidebar-subtitle">Media</h2>
                    <CustomRadioButton title={"Lyd 1"} groupname={"media"} value={"lyd1"} checked={true} />
                    <CustomRadioButton title={"Lyd 2"} groupname={"media"} value={"lyd2"} />
                    <CustomRadioButton title={"Lyd 3"} groupname={"media"} value={"lyd3"} />
                </div>

                <div className="sidebar-radio-wrapper">
                    <h2 className="sidebar-subtitle">Bilde</h2>
                    <CustomRadioButton title={"Bilde 1"} groupname={"picture"} value={"bilde1"} checked={true} />
                    <CustomRadioButton title={"Bilde 2"} groupname={"picture"} value={"bilde2"}/>
                    <CustomRadioButton title={"Bilde 3"} groupname={"picture"} value={"bilde3"}/>
                </div>

                <div className="sidebar-radio-wrapper">
                    <h2 className="sidebar-subtitle">Tekst</h2>
                    <CustomRadioButton title={"Tekst 1"} groupname={"text"} value={"text1"} checked={true} />
                    <CustomRadioButton title={"Tekst 2"} groupname={"text"} value={"text2"}/>
                    <CustomRadioButton title={"Tekst 3"} groupname={"text"} value={"text3"}/>
                </div>
                <button type="button" style={{marginLeft: this.state.isNavClosed ? "0" : "20rem"}}
                        className="sidebar-button" onClick={this.toggleNav}>></button>
            </div>
        );
    }
}

export default Sidebar;