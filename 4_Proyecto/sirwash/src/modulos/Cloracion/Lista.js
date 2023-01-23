import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';



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

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


function Lista() {

  const [value, setValue] = React.useState('');
  /*const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));*/
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeDate = (newValue) => {
    setValue(newValue); 
  };

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  /*
    <Breadcrumbs aria-label="breadcrumb" sx={{marginLeft:1}}>
      <Link underline="hover" color="inherit" href="/">
        Lista de Encuestas
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        Core
      </Link>
      <Typography color="text.primary">Medición de Cloro Residual</Typography>
    </Breadcrumbs>
  */

  return (
    <div>
      <Box xs={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Breadcrumbs aria-label="breadcrumb" sx={{marginLeft:1}}>
                <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                  Lista de Encuestas
                </Link>
                <Typography color="text.primary">Cloración</Typography>
              </Breadcrumbs>
            </Item>
          </Grid>
        </Grid>
      </Box>
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

                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <Stack spacing={2}>
                      <MobileDatePicker   
                        label="Fecha de Inicio"
                        inputFormat="DD/MM/YYYY"
                        value={value} 
                        onChange={handleChange} 
                        renderInput={(params) => <TextField {...params} size="small" sx={{marginRight:1}}/>}
                      />
                    </Stack>
                  </LocalizationProvider>

                  <LocalizationProvider dateAdapter={AdapterDayjs} sx={{marginLeft:2}}>
                    <Stack spacing={2}>
                      <MobileDatePicker   
                        label="Fecha de Fin"
                        inputFormat="DD/MM/YYYY"
                        value={value} 
                        onChange={handleChange} 
                        renderInput={(params) => <TextField {...params} size="small" sx={{marginRight:1}}/>}
                      />
                    </Stack>
                  </LocalizationProvider>

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
                  <Button variant="contained" size="small" color="primary" sx={{marginLeft:1}}>
                    <SearchIcon sx={{fontSize:18,marginRight:1}}/>
                    Buscar
                  </Button>
                  <Button variant="outlined" size="small" color="inherit" sx={{marginLeft:1}}>
                    <DeleteIcon sx={{fontSize:18,marginRight:1}}/>
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

    </div>
  )
}

export default Lista;