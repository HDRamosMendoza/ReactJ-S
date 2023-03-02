import * as React from 'react';
import {Navegacion_03 } from '../../Componente/Navegacion';
import '../../style/ContinuidadServicio.css';

const NAV_01 = "Lista de Encuestas";
const URL_01 = "/home";
const NAV_02 = "Continuidad del Servicio";
const URL_02 = "/ListaDeEncuestas/ContinuidadServicio";
const NAV_03 = "Detalle Continuidad del Servicio";

function DetalleContinuidadServicio() {
    return (<div>
        <Navegacion_03 
            nav_01={NAV_01} 
            url_01={URL_01} 
            nav_02={NAV_02} 
            url_02={URL_02} 
            nav_03={NAV_03} />
    </div>)
};

export default DetalleContinuidadServicio;