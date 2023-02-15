import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import {Navegacion_03} from '../../Componente/Navegacion';
import Titulo from '../../Componente/Titulo';
import AccionNuevo from '../../Componente/AccionNuevo';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import '../../style/Cloracion.css'

const NAV_01 = "Lista de Encuestas";
const URL_01 = "/home";
const NAV_02 = "Cloración";
const URL_02 = "/ListaDeEncuestas/Cloracion";
const NAV_03 = "Nueva Cloración";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const _guardar = () => { 
  try {
    /* FALTA AGREGAR CAMPO PARA GUARDAR */
    console.log("Guardar");
  } catch (error) {
    console.error(`Error - _guardar : ${error.name} - ${error.message}`);
  }
}

const _limpiar = () => { 
  try {
    console.log("Limpiar");
  } catch (error) {
    console.error(`Error - _limpiar : ${error.name} - ${error.message}`);
  }
}

const _cancelar = () => { 
  try {
    console.log("Cancelar");
  } catch (error) {
    console.error(`Error - _cancelar : ${error.name} - ${error.message}`);
  }
}

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

let _listaInsumo = [
  {
    value: '00',
    label: 'Seleccionar Insumo'
  },
  {
    value: '01',
    label: 'Insumo 01'
  },
  {
    value: '02',
    label: 'Insumo 02'
  },
  {
    value: '03',
    label: 'Insumo 03'
  },
  {
    value: '04',
    label: 'Insumo 04'
  }
];

function ListaCloracion() {
  const [dense, setDense] = React.useState(false);

  const [value, setValue] = React.useState('');
  const [recolector, setRecolector] = React.useState('');
  const handleChange = (event) => {
    setRecolector(event.target.value);
  };

  const [fecha, setFecha] = React.useState(null);
  const _changeFecha = (event) => { 
    setFecha(event);
  };

  return (
    <div>
      <Navegacion_03 
        nav_01={NAV_01} 
        url_01={URL_01} 
        nav_02={NAV_02} 
        url_02={URL_02} 
        nav_03={NAV_03} />
      <Box xs={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>

              <Box component="span" m={1} 
                display="flex" 
                justifyContent="space-between" 
                alignItems="left" 
                xs={1}>
                <Grid item xs={11} display="flex" justifyContent="flex-start">
                  <Titulo name={NAV_03}/>
                </Grid>
                <Grid item xs={2} display="flex" justifyContent="flex-end">
                  <TextField
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

              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}  sx={{p:2}}>
                <Box gridColumn="span 4">                  
                  <TextField 
                    id="" select fullWidth 
                    label="Centro Poblado - Donde se realiza la actividad" defaultValue="00" 
                    size="small">
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
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <Stack spacing={2}>
                      <MobileDatePicker   
                      label="Fecha de Recolección (In Situ)"
                      inputFormat="DD/MM/YYYY"
                      value={fecha} 
                      onChange={_changeFecha} 
                      renderInput={(params) => <TextField {...params} size="small" sx={{marginRight:1}}/>}
                      />
                    </Stack>
                  </LocalizationProvider>
                </Box>
              </Box>

              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} sx={{p:2}}>
                <Box gridColumn="span 4">
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box gridColumn="span 12">
                      <TextField 
                        select fullWidth 
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

                    <Box gridColumn="span 12">
                      <TextField 
                        select fullWidth 
                        label="Insumo" defaultValue="00" 
                        helperText="" size="small">
                        {
                          _listaInsumo.map((option) => (
                            <MenuItem key={option.value} value={option.value} >
                              {option.label}
                            </MenuItem>
                          ))
                        }
                      </TextField>
                    </Box>
                  
                    <Box gridColumn="span 12">
                      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                        <Box gridColumn="span 4">
                          <List>
                            <ListItem sx={{fontSize:17, fontWeight: "bold"}} >
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
                              <ListItemText secondary="Foto de Registro de Cloración del Prestador/Operador (obligatorio)"/>
                            </ListItem>
                          </List>
                        </Box>
                      </Box>

                      <Button variant="outlined"  fullWidth>
                        <AddAPhotoIcon  sx={{fontSize:18,marginRight:2}}/>
                        Adjuntar Foto
                      </Button>  
                    </Box>
                  </Box>
                </Box>

                <Box gridColumn="span 8" sx={{ p: 2, border: '1px dashed grey' }}></Box>

              </Box>

              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} sx={{p:2}} >
                <Box gridColumn="span 12">
                  <TextField
                    fullWidth multiline 
                    label="Observaciones" rows={2} 
                    placeholder="Ingrese observaciones"
                  />
                </Box>
              </Box>

              <Divider variant="middle" sx={{ width: '98.3%'}}/>

              <AccionNuevo 
                _volver={URL_02} 
                _guardar={()=>_guardar()} 
                _limpiar={_limpiar}  
                _cancelar={_cancelar} />

            </Item>
          </Grid>
        </Grid>
      </Box>

      
    
    </div>
  )
};

export default ListaCloracion;