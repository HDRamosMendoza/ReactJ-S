import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Filtro() {
    
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
            
            </Grid>
            <Grid item xs={2}>
            
            </Grid>
            <Grid item xs={2}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" 
                            value={age} label="Age" size="small" onChange={handleChange}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Button 
                    size="small" 
                    variant="outlined" 
                    href="#outlined-buttons" > 
                    Guardar
                </Button>
                <Button 
                    size="small" 
                    variant="outlined" 
                    href="#outlined-buttons" > 
                    Limpiar
                </Button>
            </Grid>
        </Grid>
  );
}

export default Filtro;