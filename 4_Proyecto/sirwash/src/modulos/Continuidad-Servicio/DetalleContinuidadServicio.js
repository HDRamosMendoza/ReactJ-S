import * as React from 'react';
import {styled} from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import {Navegacion_03} from '../../Componente/Navegacion';
import {AccionVolver} from '../../Componente/Accion';
import Titulo from '../../Componente/Titulo';
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