import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import Typography from '@mui/material/Typography';
/* import TableGrid from './../Componente/TableGrid'; */
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Filtro from '../../Componente/Filtro';
import TableGrid from './TableGrid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Lista() {
  return (
    <div>
        
        
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item><Filtro /></Item>
            </Grid>
            <Grid item xs={12}>
              
                <TableGrid />
              
            </Grid>
            <Grid item xs={12} justify="space-between" >
            <Item>
              
                </Item>
            </Grid>
          </Grid>
        </Box>
        <Box justifyContent="flex-start" 
          alignItems="flex-start" 
          
          >
              <Button 
                    size="small" 
                    variant="outlined" 
                    href="#outlined-buttons" > 
                    Limpiar
                </Button>

                <Button 
                    size="small" 
                    variant="outlined" 
                    href="#outlined-buttons" > 
                    Limpiar
                </Button>
        </Box>   
    </div>
  );
}

export default Lista;