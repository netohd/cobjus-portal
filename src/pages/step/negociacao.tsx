'use client'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from '@/components/header';
import BillCard from '@/components/card';

export default function Negociacao() {

  return (
    <Grid container sx={{ height: '100vh' }}>

      <Grid item xs={12} sm={8} md={5} sx={{ width: '100%', alignItems: 'center' }} >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Header title={'Você pode resolver as seguintes negociações:'} />
          <BillCard
            title={'Algar Farming'}
            description={'Lorem ipsun lorem teste testando'}
            logoUrl={'https://www.algar.com.br/wp-content/uploads/2021/03/algar-farming.png'}
          />

        </Box>
      </Grid>
    </Grid >
  );
}