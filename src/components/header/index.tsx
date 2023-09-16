'use client'
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Algar from '@/Assets/images/Algar.png';

export default function Header({ title }: any) {

  return (
    <>
      <Image src={Algar} alt="Logo Algar" style={{ width: '35%', height: '35%', marginBottom: '7%', minWidth: '100px' }} />
      <Typography component="h1" variant="h6">
        {title || 'Lorem ipsun'}
      </Typography>
    </>
  );
}