import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function BotonNuevo() {
  return (
    <Button 
        size="small" 
        variant="outlined" 
        href="#outlined-buttons" 
        startIcon={<AddIcon fontSize="small"/>}>
        Nuevo Registro
    </Button>
  );
}

export default BotonNuevo;