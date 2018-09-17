import React, { Component } from 'react';
import '../styles/Topbar.css';

class Topbar extends Component {
    render() {
        return (
            <div className="topbar">
                <div className="image-selector">
                    <div>
                        <button onClick={() => this.props.onTabChanged(0)}>Bildevalg 1</button>
                        <button onClick={() => this.props.onTabChanged(1)}>Bildevalg 2</button>
                        <button onClick={() => this.props.onTabChanged(2)}>Bildevalg 3</button>
                        <button onClick={() => this.props.onTabChanged(3)}>Bildevalg 4</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;