import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

import Typography from '@mui/material/Typography';

function Filtro({_buscar, _limpiar}) {

    const [value, setValue] = React.useState();

    const [fechaInicio, setFechaInicio] = React.useState(null);
    const _changeFechaInicio = (event) => { 
        setFechaInicio(event);
    };

    const [fechaFin, setFechaFin] = React.useState();
    const _changeFechaFin = (event) => { 
        setFechaFin(event);
    };
    
    const [recolector, setRecolector] = React.useState('NA');
    const _changeSelect = (event) => { 
        setRecolector(event.target.value);
    };
    const values = [
        {value: 'NA', label: 'Seleccione Recolector'},
        {value: '01', label: 'Operador 01'},
        {value: '02', label: 'Operador 02'},
        {value: '03', label: 'Operador 03'},
        {value: '04', label: 'Operador 04'},
        {value: '05', label: 'Operador 05'}
    ];
    const [validador, setValidador] = React.useState('NA');
    const _changeSelectValidador = (event) => { 
        setValidador(event.target.value);
    };
    const valuesValidador = [
        {value: 'NA', label: 'Seleccione Recolector'},
        {value: '01', label: 'Operador 01'},
        {value: '02', label: 'Operador 02'},
        {value: '03', label: 'Operador 03'},
        {value: '04', label: 'Operador 04'},
        {value: '05', label: 'Operador 05'}
    ];
    return (
        <Box
            component="span"
            m={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            xs={1} sx={{ my:0,mx:2,marginTop:'20px'}}>
            <Grid item xs={6} display="flex" justifyContent="flex-start">

                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <Stack spacing={2}>
                        <MobileDatePicker   
                            label="Fecha de Inicio"
                            inputFormat="DD/MM/YYYY"
                            value={fechaInicio} 
                            onChange={_changeFechaInicio} 
                            renderInput={
                                (params) => <TextField {...params} size="small" sx={{marginRight:1}}/>
                            }/>
                    </Stack>
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{marginLeft:2}}>
                    <Stack spacing={2}>
                        <MobileDatePicker   
                            label="Fecha de Fin"
                            inputFormat="DD/MM/YYYY"
                            value={fechaFin} 
                            onChange={_changeFechaFin} 
                            renderInput={
                                (params) => <TextField {...params} size="small" sx={{marginRight:1}}/>
                            }/>
                    </Stack>
                </LocalizationProvider>

                <Box sx={{ minWidth: 200, marginLeft:1}}>
                    <FormControl fullWidth>
                        <InputLabel id="ID_Recolector">Recolector</InputLabel>
                        <Select 
                            labelId="ID_Recolector" 
                            value={recolector} 
                            label="Recolector" 
                            size="small" 
                            onChange={_changeSelect} 
                            placeholder="Se">
                            {
                                values.map((option) => (
                                    <MenuItem value={option.value} key={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: 200, marginLeft:1}}>
                    <FormControl fullWidth>
                        <InputLabel id="ID_Validador">Validador</InputLabel>
                        <Select 
                            labelId="ID_Validador" 
                            value={validador} 
                            label="Validador" 
                            size="small" 
                            onChange={_changeSelectValidador} 
                            placeholder="Se">
                            {
                                valuesValidador.map((option) => (
                                    <MenuItem value={option.value} key={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Box>
                
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="flex-end">
                <Button 
                    variant="contained" 
                    size="small" 
                    color="primary" 
                    sx={{marginLeft:'5px',fontSize:'12px'}}  
                    onClick={()=>_buscar(fechaInicio, fechaFin, recolector)} >
                    <SearchIcon sx={{fontSize:18,marginRight:1}}/>
                    Buscar
                </Button>
                <Button 
                    variant="outlined" 
                    size="small" 
                    color="inherit" 
                    sx={{marginLeft:'5px',fontSize:'12px'}} 
                    onClick={_limpiar} >
                    <DeleteIcon sx={{fontSize:18,marginRight:1}}/>
                    Limpiar
                </Button>
            </Grid>
        </Box>
  );
}

export default Filtro;