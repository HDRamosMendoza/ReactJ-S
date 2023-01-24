import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import Navegacion from '../../Componente/Navegacion';
import AccionNuevo from '../../Componente/AccionNuevo';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import FolderIcon from '@mui/icons-material/Folder';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const currencies = [
    {
      value: '0',
      label: 'NO',
    },
    {
      value: '1',
      label: 'SI',
    }
];

let _listaCentroPoblado = [
  {
    value: '00',
    label: 'Seleccionar Centro Poblado'
  },
  {
    value: '01',
    label: 'Centro Poblado 01'
  },
  {
    value: '02',
    label: 'Centro Poblado 02'
  }
];

let _listaSAP = [
  {
    value: '00',
    label: 'Seleccionar SAP - Sistema de Agua Potable'
  },
  {
    value: '01',
    label: 'Sistema de Agua Potable 01'
  },
  {
    value: '02',
    label: 'Sistema de Agua Potable 02'
  }
];

let _listaComponentes = [
  {
    value: '00',
    label: 'Seleccionar Componente'
  },
  {
    value: '01',
    label: 'Reservorio'
  },
  {
    value: '02',
    label: 'Primera Vivienda'
  },
  {
    value: '03',
    label: 'Vivienda Intermedia'
  },
  {
    value: '04',
    label: 'Última Vivienda'
  }
];

/* <Box component="form" justifyContent="flex-start" sx={{ '& .MuiTextField-root': { m: 1, width: '40ch' }, }} noValidate autoComplete="off"> */
function NuevoRegistro() {

  const [dense, setDense] = React.useState(false);
  
  const [value, setValue] = React.useState('');
  const [recolector, setRecolector] = React.useState('');
  const handleChange = (event) => {
    setRecolector(event.target.value);
  };

  return (
    <div>
        

      <Navegacion tab="Lista de Encuestas"/>

      <Box xs={1} >
       

          <Grid item xs={12} spacing={1}>
            <Item>
              <Box component="span" m={1} display="flex" justifyContent="space-between" alignItems="center" xs={1}>
                <Grid item xs={8} display="flex" justifyContent="flex-start" sx={{borderBottom:"2px solid #666"}}>
                  <Typography variant="h5" component="h2">
                    &nbsp;<strong>Nuevo Registro</strong>&nbsp;
                  </Typography>
                </Grid>
                <Grid item xs={4} display="flex" justifyContent="flex-end">
                  <TextField
                    id=""
                    select
                    label="Validado"
                    defaultValue="0"
                    helperText="Información validada"  size="small" >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value} >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Box>
              
              

              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 4">                  
                  <TextField 
                    id="" select fullWidth 
                    label="Centro Poblado" defaultValue="00" 
                    helperText="Donde se realiza la actividad" size="small">
                    {
                      _listaCentroPoblado.map((option) => (
                        <MenuItem key={option.value} value={option.value} >
                          {option.label}
                        </MenuItem>
                      ))
                    }
                  </TextField>
                </Box>
                <Box gridColumn="span 4">                  
                  <TextField
                    id="" select fullWidth 
                    label="SAP - Sistema de Agua Potable" defaultValue="00" 
                    helperText="" size="small">
                    {
                      _listaSAP.map((option) => (
                        <MenuItem key={option.value} value={option.value} >
                          {option.label}
                        </MenuItem>
                      ))
                    }
                  </TextField>                  
                </Box>
                <Box gridColumn="span 4">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Stack spacing={2}>
                          <MobileDatePicker   
                          label="Fecha de Recolección (in situ)" inputFormat="DD/MM/YYYY" 
                          value={value} onChange={handleChange} 
                          renderInput={(params) => <TextField {...params} size="small" sx={{marginRight:1}}/>}
                          />
                      </Stack>
                    </LocalizationProvider>
                </Box>

                <Box gridColumn="span 4">
                  <Box gridColumn="span 4">
                    <TextField 
                      id="" select fullWidth 
                      label="Componente" defaultValue="00" 
                      helperText="" size="small">
                      {
                        _listaComponentes.map((option) => (
                          <MenuItem key={option.value} value={option.value} >
                            {option.label}
                          </MenuItem>
                        ))
                      }
                    </TextField>
                  </Box>


                  <Box gridColumn="span 4">
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                      <Box gridColumn="span 4">
                        <List>
                          <ListItem sx={{fontSize:12, fontWeight: "bold"}} >
                            <ListItemText primary="Sustento"/>
                          </ListItem>
                        </List>
                      </Box>
                      <Box gridColumn="span 8">
                        <List>
                          <ListItem sx={{padding:0}}>
                            <ListItemIcon>
                              <AddAPhotoIcon sx={{fontSize: 17}}/>
                            </ListItemIcon>
                            <ListItemText secondary="Foto de Actividad (obligatorio)"/>
                          </ListItem>
                          <ListItem sx={{padding:0}}>
                            <ListItemIcon>
                              <AddAPhotoIcon sx={{fontSize:17}}/>
                            </ListItemIcon>
                            <ListItemText secondary="Foto de Acta (facultativo)"/>
                          </ListItem>
                        </List>
                      </Box>
                    </Box>

                    <Button variant="outlined" href="#outlined-buttons" fullWidth>
                      <AddAPhotoIcon  sx={{fontSize:18,marginRight:2}}/>
                      Adjuntar Foto
                    </Button>  
                  </Box>
                </Box>

                <Box gridColumn="span 8">
                  
                </Box>

                <Box gridColumn="span 12">
                  <TextField
                    id="" fullWidth multiline 
                    label="Observaciones" rows={2} 
                    placeholder="Ingrese observaciones"
                  />
                </Box>
                
                
              </Box>

            </Item>
          </Grid>

    
      </Box>

      <AccionNuevo />
      
    </div>
  )
}
export default NuevoRegistro;