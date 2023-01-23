import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import Grid from '@mui/material/Grid';

function Acciones() {
  return (
    <Box
        component="span"
        m={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        xs={1} >
      <Button variant="outlined" color="inherit" style={{ height: '30px' }}>
        <ChevronLeftIcon/>
        Volver
      </Button>
      <Grid item xs={12} display="flex" justifyContent="flex-end">
        <Button variant="outlined" size="small" color="inherit" sx={{marginLeft:'5px'}}>
          <AutorenewIcon sx={{fontSize:18,marginRight:1}}/>
          Actualizar
        </Button>

        <Button variant="contained" size="small" color="primary" sx={{marginLeft:'5px'}}>
          <AddIcon sx={{fontSize:18,marginRight:1}}/>
          Nuevo Registro
        </Button>
        
        <Button variant="contained" size="small" color="success" sx={{marginLeft:'5px'}}>
          <CloudDownloadIcon sx={{fontSize:18,marginRight:1}}/>
          Exportar XLS
        </Button>
      </Grid>
    </Box>
  );
}

export default Acciones;