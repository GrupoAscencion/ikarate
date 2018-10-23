import React from 'react';
import { Link,withRouter } from 'react-router-dom';

import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
    <header className="toolbar" >
        <nav className="toolbar_navigation">
            <div>
               <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/" >iKarate</a></div>
            <div className="spacer">{props.loggedInUser}</div>
            <div className="toolbar_navigation-items">
                <ul >
                <li><a>Inicio </a></li>
                <li><a onClick={props.signinGoogle}>Entrar</a></li>
                <li><a>Nosotros</a></li>
                <li><a onClick={props.signOutGoogle}>Salir</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;