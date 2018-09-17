import React, {Component} from 'react';
import '../styles/Header.css';
/*Det ble avklart at vi kan bruke Font Awesome i prosjektet for å legge inn ikoner, etc.
 Link for oppklaring:https://piazza.com/class/jl25sg0g4ql5nk?cid=39*/
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faTimes);

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header" style={{borderBottom: (this.props.isMenuHidden) ? "4px solid #3700fe" : "4px solid white"}}>
                <h1>Galleri Crék</h1>
                <div className="menuButton" onClick={this.props.onMenuToggle}>{ this.props.isMenuHidden ? (
                    <FontAwesomeIcon icon="bars"/>
                ) : (
                    <FontAwesomeIcon icon="times"/>
                )}</div>
            </div>
        );
    }
}

export default Header;