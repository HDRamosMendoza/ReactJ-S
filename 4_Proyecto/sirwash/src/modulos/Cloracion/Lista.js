import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navegacion from '../../Componente/Navegacion';
import Filtro from '../../Componente/Filtro';
import Acciones from '../../Componente/Acciones';
import TableGrid from '../../Componente/TableGrid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

function Lista() {
  return (
    <div>

      <Navegacion tab="Lista de Encuestas"/>

      <Box xs={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <Item>
              <Filtro />
            </Item>
          </Grid>

          <Grid item xs={12}>
            <TableGrid />
          </Grid>

        </Grid>
      </Box>

      <Acciones />
      
    </div>
  )
}
export default Lista;