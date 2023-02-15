import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Navegacion_02 } from '../../Componente/Navegacion';
import Titulo from '../../Componente/Titulo';
import Filtro from '../../Componente/Filtro';
import Acciones from '../../Componente/Acciones';
import TableGrid from '../../Componente/TableGrid';
import '../../style/LimpiezaDesinfeccionComponenteSAP.css'
/*
import {useSate} from 'react';
*/

const NAV_01 = "Lista de Encuestas";
const NAV_02 = "Desinfección de Componente del SAP";
const URL_NUEVO = "/ListaDeEncuestas/LimpiezaDesinfeccionComponenteSAP/NuevaLimpiezaDesinfeccionComponenteSAP";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const _buscar = (_fechaInicio, _fechaFin, _colector) => { 
  try {
    if(_fechaInicio) {
      console.log(new Date(_fechaInicio["$d"]).toLocaleDateString("es"));
      // 6/2/2023
    }

    if(_fechaFin) {
      console.log(new Date(_fechaFin["$d"]).toLocaleDateString("es"));
    }
    
    
    
    console.log(_colector);
  } catch (error) {
    console.error(`Error - _buscar : ${error.name} - ${error.message}`);
  }
}

const _limpiar = () => {
  try {

    console.log("Limpiar");

  } catch (error) {
    console.error(`Error - _limpiar : ${error.name} - ${error.message}`);
  }
}

const _volver = () => {
  try {

    console.log("Volver");

  } catch (error) {
    console.error(`Error - _volver : ${error.name} - ${error.message}`);
  }
}

const _actualizarRegistro = () => {
  try {

    console.log("Actualizar");

  } catch (error) {
    console.error(`Error - _actualizarRegistro : ${error.name} - ${error.message}`);
  }
}

const _nuevoRegistro = () => {
  try {

    console.log("Nuevo");

  } catch (error) {
    console.error(`Error - _nuevoRegistro : ${error.name} - ${error.message}`);
  }
}

const _exportarRegistro = () => {
  try {

    console.log("Exportar");

  } catch (error) {
    console.error(`Error - _exportarRegistro : ${error.name} - ${error.message}`);
  }
}

function ListaLimpiezaDesinfeccionComponenteSAP() {
  return (
    <div>
      <Navegacion_02 nav_01={NAV_01} nav_02={NAV_02} />
      <Box xs={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Titulo name={NAV_02}/>
              <Filtro 
                _buscar = {_buscar} 
                _limpiar = {_limpiar} />
              <TableGrid />
              <Acciones 
                _volver = {_volver} 
                _urlNuevo = {URL_NUEVO}   
                _actualizarRegistro = {_actualizarRegistro} 
                _nuevoRegistro = {_nuevoRegistro} 
                _exportarRegistro = {_exportarRegistro} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default ListaLimpiezaDesinfeccionComponenteSAP;