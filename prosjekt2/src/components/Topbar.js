import React, { Component } from 'react';
import '../styles/Topbar.css';

class Topbar extends Component {
    render() {
        return (
            <div className="topbar">
            <div className="image-selector">
                <div>
                    <a href="#"><h3>Bildevalg 1</h3></a>
                    <a href="#"><h3>Bildevalg 2</h3></a>
                    <a href="#"><h3>Bildevalg 3</h3></a>
                    <a href="#"><h3>Bildevalg 4</h3></a>
                </div>
            </div>
            </div>
        );
    }
}

export default Topbar;