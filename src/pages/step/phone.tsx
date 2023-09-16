'use client'
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Header from '@/components/header';
import { countryCodes } from '@/utils/global';
import Copyright from '@/components/copyright';
import NavButtons from '@/components/navbuttons';
import router from 'next/router';

export default function Phone() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('phone')
    });
    router.push('/step/negociacao')
  };

  const CountryCodeSelector = (onChange: any) => {
    return (
      <TextField
        select
        label="País"
        value={countryCode}
        onChange={handleChangeCountry}
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
  const [phone, setPhone] = useState('');

  const handleChangePhone = (e: any) => {
    setPhone(e.target.value)
  }

  const handleChangeCountry = (e: any) => {
    setCountryCode(e.target.value)
  }

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
          <Header title={'Informe o seu telefone:'} />
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <CountryCodeSelector />
              </Grid>

              <Grid item xs={10}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Telefone"
                  type="phone"
                  id="phone"
                  value={phone}
                  onChange={handleChangePhone}
                />
              </Grid>
            </Grid>

            <NavButtons />
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid >
  );
}