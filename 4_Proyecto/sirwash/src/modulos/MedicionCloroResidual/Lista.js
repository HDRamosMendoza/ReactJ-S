import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Table } from '../../Componente/Table';

function Lista() {
  return (
    <div>
      <Typography variant="h7" color="initial">Medición de Cloro Residual / Lista</Typography>
      
      <Typography variant="h6" color="initial">Medición de Cloro Residual</Typography>

      <Table />
     
    </div>
  );
}

/*
function Lista() {
  return (
    <div>
      <Typography variant="h7" color="initial">Medición de Cloro Residual / Lista</Typography>
      
      <Typography variant="h6" color="initial">Medición de Cloro Residual</Typography>

      <Button 
        size="small" 
        variant="outlined" 
        href="#outlined-buttons" 
        startIcon={<ArrowBackIosNewIcon fontSize="small"/>}> 
        Volver
      </Button>

      <Button 
        size="small"  
        color="primary" 
        variant="outlined" 
        href="#outlined-buttons" 
        startIcon={<AddIcon fontSize="small"/>}>
        Nuevo Registro
      </Button>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          S
        </Grid>
        <Grid item xs={4}>
          S
        </Grid>
      </Grid>
     
    </div>
  );
}*/

export default Lista;