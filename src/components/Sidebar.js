import React, { Component } from 'react';
import '../styles/Sidebar.css';
import CustomRadioButton from "./CustomRadioButton";
import PropTypes from 'prop-types';

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar" style={{width: (this.props.isNavClosed && this.props.smallScreen) ? "0" : "15rem"}}>
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
            </div>
        );
    }

    static propTypes = {
        onChange: PropTypes.func,
        smallScreen: PropTypes.bool,
        isNavClosed: PropTypes.bool,
    }
}

export default Sidebar;