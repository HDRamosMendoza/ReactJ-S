import * as React from 'react';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

function Filtro() {
    const [value, setValue] = React.useState('');
    const handleChangeDate = (newValue) => { setValue(newValue); };
    /*const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));*/
    const [recolector, setRecolector] = React.useState('');
    const handleChange = (event) => { setRecolector(event.target.value); };

    return (
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
                        value={recolector} label="Recolector" size="small" onChange={handleChange}>
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
  );
}

export default Filtro;