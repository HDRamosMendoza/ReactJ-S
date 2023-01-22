import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function BotonVolver() {
  return (
    <Button size="small" variant="outlined" href="#outlined-buttons">
        <ArrowBackIosIcon fontSize="small" />
        Volver
    </Button>
  );
}

export default BotonVolver;