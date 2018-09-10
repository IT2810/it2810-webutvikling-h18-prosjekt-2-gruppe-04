import React, { Component } from 'react';
import '../styles/Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-radio-wrapper">
                    <h2 className="sidebar-subtitle">Media</h2>

                    <label>Lyd 1
                        <input type='radio' className="sidebar-radio" name='media' />
                        <span className="custom-radio"/>
                    </label>

                    <label>Lyd 2
                        <input type='radio' className="sidebar-radio" name='media' />
                        <span className="custom-radio"/>
                    </label>

                    <label>Lyd 3
                        <input type='radio' className="sidebar-radio" name='media' />
                        <span className="custom-radio"/>
                    </label>
                </div>

                <div className="sidebar-radio-wrapper">
                    <h2 className="sidebar-subtitle">Bilde</h2>

                    <label>Bilde 1
                        <input type='radio' className="sidebar-radio" name='picture' />
                        <span className="custom-radio"/>
                    </label>

                    <label>Bilde 2
                        <input type='radio' className="sidebar-radio" name='picture' />
                        <span className="custom-radio"/>
                    </label>

                    <label>Bilde 3
                        <input type='radio' className="sidebar-radio" name='picture' />
                        <span className="custom-radio"/>
                    </label>
                </div>

                <div className="sidebar-radio-wrapper">
                    <h2 className="sidebar-subtitle">Tekst</h2>

                    <label>Tekst 1
                        <input type='radio' className="sidebar-radio" name='text' />
                        <span className="custom-radio"/>
                    </label>

                    <label>Tekst 2
                        <input type='radio' className="sidebar-radio" name='text' />
                        <span className="custom-radio"/>
                    </label>

                    <label>Tekst 3
                        <input type='radio' className="sidebar-radio" name='text' />
                        <span className="custom-radio"/>
                    </label>
                </div>
                <button type="button" className="sidebar-button">></button>
            </div>
        );
    }
}

export default Sidebar;