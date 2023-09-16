'use client'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.algar.com.br/" >
        Grupo Algar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function MainPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  const countryCodes = [
    { label: '+1', value: 'US' },
    { label: '+44', value: 'UK' },
    { label: '+33', value: 'FR' },
    // ... adicione mais códigos conforme necessário
  ];

  const CountryCodeSelector = (onChange: any, value: any) => {
    return (
      <TextField
        select
        label="Código do País"
        value={value}
        onChange={onChange}
        variant="outlined"
        fullWidth
      >
        {countryCodes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  };

  const [countryCode, setCountryCode] = useState('');

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ width: '100%', alignItems: 'center' }} >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid item style={{ marginBottom: '10%', justifyItems: 'center' }}>
            <img src="https://i.ibb.co/28g6LWq/Algar.png" alt="Logo Algar" style={{ width: '35%', minWidth: '100px' }} />
          </Grid>

          <Typography component="h1" variant="h6">
            Informe sua data de nascimento
          </Typography>


          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>

            <Grid container spacing={2}>

              <Grid item xs={2}>
                <CountryCodeSelector
                  value={countryCode}
                  onChange={(e: any) => setCountryCode(e.target.value)}
                />
              </Grid>

              <Grid item xs={10}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phone"
                  label="Telefone"
                  type="phone"
                  id="phone"
                // value={dataNascimento}
                // onChange={maskDataNascimento}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} >
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ my: 2 }}
                >
                  Voltar
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ my: 2 }}
                >
                  Próximo
                </Button>
              </Grid>
            </Grid>

            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu sua senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid >
  );
}