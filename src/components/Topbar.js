import React, { Component } from 'react';
import '../styles/Topbar.css';
import PropTypes from 'prop-types';


class Topbar extends Component {

    render() {
        return (
            <div className="topbar" style={{display: (this.props.isMenuHidden) ? "none" : "inline-block"}}>
                <div className="image-selector">
                    <button className={(this.props.tabIndex === 0) ? "selected": ""}
                            onClick={() => this.props.onTabChanged(0)}>Gambas</button>
                    <button className={(this.props.tabIndex === 1) ? "selected": ""}
                            onClick={() => this.props.onTabChanged(1)}>Tattier</button>
                    <button className={(this.props.tabIndex === 2) ? "selected": ""}
                            onClick={() => this.props.onTabChanged(2)}>Louvré</button>
                    <button className={(this.props.tabIndex === 3) ? "selected": ""}
                            onClick={() => this.props.onTabChanged(3)}>Rüpee</button>
                </div>
                <div className="mobileOverlay" onClick={this.props.onMenuToggle}/>
            </div>
        );
    }

    static propTypes = {
        tabIndex: PropTypes.number,
        onTabChanged: PropTypes.func,
        onMenuToggle: PropTypes.func,
        isMenuHidden: PropTypes.bool,
    }
}

export default Topbar;