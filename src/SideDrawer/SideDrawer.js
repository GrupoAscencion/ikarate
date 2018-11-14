import React from 'react';

import './SideDrawer.css'

const sideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/Students"> Catalogo de estudiantes</a></li>
                <li><a href="/Teachers"> Catalogo de Senseis</a></li>
                <li><a href="/"> Asistencia</a></li>
                <li><a href="/"> Pagos</a></li>
                <li><a href="/"> Inscripciones</a></li>
                <li><a href="/"> Administración</a></li>
            </ul>
        </nav>
    );
}

export default sideDrawer;