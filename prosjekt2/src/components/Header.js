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

    render() {
        return (
            <div className="header">
                <h1>My awesome gallery</h1>
                <div className="burger"><a href="#"><FontAwesomeIcon icon="bars"/></a></div>
                <div className="cross"><a href="#"><FontAwesomeIcon icon="times"/></a></div>
            </div>
        );
    }
}

export default Header;