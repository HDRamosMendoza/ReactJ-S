import * as React from 'react';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';



import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Filtro from '../../Componente/Filtro';
import TableGrid from './TableGrid';
import TextField from '@mui/material/TextField';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Lista() {

  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeDate = (newValue) => {
    setValue(newValue); 
  };

  return (
    <div>

      
      <Box xs={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Box
                component="span"
                m={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                xs={1} >
                <Grid item xs={6} display="flex" justifyContent="flex-start">

           


                  <Box sx={{ minWidth: 200, marginLeft:1}}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Recolector</InputLabel>
                      <Select labelId="demo-simple-select-label" id="" 
                          value={age} label="Recolector" size="small" onChange={handleChange}>
                          <MenuItem value={10}>Recolector 1</MenuItem>
                          <MenuItem value={20}>Recolector 2</MenuItem>
                          <MenuItem value={30}>Recolector 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="flex-end">
                  <Button variant="contained" size="small" color="primary" xs={{marginLeft:1}}>
                    <AddIcon/>
                    Buscar
                  </Button>
                  <Button variant="outlined" size="small" color="inherit" xs={{marginLeft:1}}>
                    <AutorenewIcon/>
                    Limpiar
                  </Button>
                </Grid>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12}>
            <TableGrid />
          </Grid>

        </Grid>
      </Box>
      
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
          <Button variant="contained" size="small" color="primary" style={{marginLeft:'5px'}}>
            <AddIcon/>
            Nuevo Registro
          </Button>
          <Button variant="outlined" size="small" color="inherit" style={{marginLeft:'5px'}}>
            <AutorenewIcon/>
            Actualizar
          </Button>
          <Button variant="outlined" size="small" color="success" style={{marginLeft:'5px'}}>
            Exportar XLS
          </Button>
        </Grid>
      </Box>

    </div>
  )
}

export default Lista;