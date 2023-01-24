import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
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

function Navegacion(props) {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    console.log(props);

    /*
    <Breadcrumbs aria-label="breadcrumb" sx={{marginLeft:1}}>
      <Link underline="hover" color="inherit" href="#">
        {props.tab}
      </Link>
      <Typography color="text.primary">Cloración</Typography>
    </Breadcrumbs>
    */

    return (
      <Box xs={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>

              <Breadcrumbs aria-label="breadcrumb" sx={{marginLeft:1}}>
                <Link underline="hover" color="inherit" href="#">
                  {props.tab}
                </Link>
                <Typography color="text.primary">Cloración</Typography>
              </Breadcrumbs>

            </Item>
          </Grid>
        </Grid>
      </Box>
  );
}

export default Navegacion;