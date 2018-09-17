import React, { Component } from 'react';
import '../styles/Topbar.css';
class Topbar extends Component {
    render() {
        return (
            <div className="topbar" style={{display: (this.props.isMenuHidden) ? "none" : "inline-block"}}>
                <div className="image-selector">
                    <div>
                        <a href="#"><h3>Gambas</h3></a>
                        <a href="#"><h3>Tattier</h3></a>
                        <a href="#"><h3>Louvré</h3></a>
                        <a href="#"><h3>Rüpee</h3></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;