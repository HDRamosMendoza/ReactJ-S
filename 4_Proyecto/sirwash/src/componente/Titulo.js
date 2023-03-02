import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export function Titulo(props) {
    return (
        <Box sx={{ width: '99%', marginBottom:'10px'}}>
            <Box sx={{ my: 0, mx: 2 }}>
                <Grid container textAlign="left">
                    <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                            {props.name}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Divider variant="middle" sx={{ width: '99%'}}/>
        </Box>
  );
};

export function TituloDetalle(props) {
    return (
        <Box sx={{ width: '99%', marginBottom:'10px'}}>
            <Box sx={{ my: 0, mx: 2 }}>
                <Grid container textAlign="left">
                    <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                            <strong>{props.name}</strong>: <span>{props.date}</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Divider variant="middle" sx={{ width: '99%'}}/>
        </Box>
  );
};
