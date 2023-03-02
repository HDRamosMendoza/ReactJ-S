import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";
import Grid from '@mui/material/Grid';

const manejarClic = () => {
  try {
    console.log("LE DIO CLIC");
  } catch(error) {
    console.error(error.message);
  }
}

export function AccionNuevo({_volver, _guardar, _limpiar, _cancelar}) {
  return (
    <Box 
      component="span" 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      m={2} xs={1} sx={{p:0}}>

      <Button variant="outlined" color="inherit" style={{height:'30px',fontSize:'12px'}}>
        <ChevronLeftIcon/>
        <Link to={_volver}>Volver</Link>  
      </Button>

      <Grid 
        item xs={12} 
        display="flex" 
        justifyContent="flex-end">

        <Button 
          variant="contained" 
          size="small" 
          color="primary" 
          sx={{marginLeft:'5px',fontSize:'12px'}} 
          onClick={_guardar} >
          <SaveIcon sx={{fontSize:18,marginRight:1}}/>
          Guardar
        </Button>
        
        <Button 
          variant="outlined" 
          size="small" 
          color="inherit" 
          sx={{marginLeft:'5px',fontSize:'12px'}} 
          onClick={_limpiar} >
          <DeleteIcon sx={{fontSize:18,marginRight:1}}/>
          Limpiar
        </Button>

        <Button 
          variant="outlined" 
          size="small" 
          color="inherit" 
          sx={{marginLeft:'5px',fontSize:'12px'}} 
          onClick={_cancelar} >
          <CloseIcon sx={{fontSize:18,marginRight:1}}/>
          Cancelar
        </Button>
      </Grid>

    </Box>
  );
};

export function AccionVolver({_volver}) {
  return (
    <Box 
      component="span" 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      m={2} xs={1} sx={{p:0}}>
      <Button variant="outlined" color="inherit" style={{height:'30px',fontSize:'12px'}}>
        <ChevronLeftIcon/>
        <Link to={_volver}>Volver</Link>
      </Button>
    </Box>
  );
};