import React, { Component } from 'react';
import '../styles/Sidebar.css';
import CustomRadioButton from "./CustomRadioButton";
import PropTypes from 'prop-types';

class Sidebar extends Component {

    // Constructor
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavClosed: true,
        };
    }

    // Update state to toggle sidebar on small devices
    toggleNav() {
        this.setState(state => ({isNavClosed: !state.isNavClosed}));
    }

    render() {
        return (
            <div className="sidebar" style={{width: (this.state.isNavClosed && this.props.smallScreen) ? "0" : "15rem"}}>
                <div className="sidebar-radio-wrapper">
                    <h2 className="sidebar-subtitle">Lyd</h2>
                    <CustomRadioButton title={"Hund"} group={"sound"} value={"dog"} defaultChecked={true} onChange={this.props.onChange} />
                    <CustomRadioButton title={"Katt"} group={"sound"} value={"cat"} onChange={this.props.onChange} />
                    <CustomRadioButton title={"Rev"} group={"sound"} value={"fox"} onChange={this.props.onChange} />
                </div>

                <div className="sidebar-radio-wrapper">
                    <h2 className="sidebar-subtitle">Bilde</h2>
                    <CustomRadioButton title={"Hund"} group={"svg"} value={"dog"} defaultChecked={true} onChange={this.props.onChange} />
                    <CustomRadioButton title={"Katt"} group={"svg"} value={"cat"} onChange={this.props.onChange}/>
                    <CustomRadioButton title={"Rev"} group={"svg"} value={"fox"} onChange={this.props.onChange}/>
                </div>

                <div className="sidebar-radio-wrapper">
                    <h2 className="sidebar-subtitle">Tekst</h2>
                    <CustomRadioButton title={"Hund"} group={"text"} value={"dog"} defaultChecked={true} onChange={this.props.onChange} />
                    <CustomRadioButton title={"Katt"} group={"text"} value={"cat"} onChange={this.props.onChange} />
                    <CustomRadioButton title={"Rev"} group={"text"} value={"fox"} onChange={this.props.onChange} />
                </div>
                <button type="button" style={{marginLeft: this.state.isNavClosed ? "0" : "15rem"}}
                        className="sidebar-button" onClick={this.toggleNav}>{this.state.isNavClosed ? (
                    <span>></span>
                ) : (
                    <span>&lt;</span> // &lt; is used to escape the '<' sign in html
                )}</button>
            </div>
        );
    }

    static propTypes = {
        onChange: PropTypes.func,
        smallScreen: PropTypes.bool,
    }
}

export default Sidebar;