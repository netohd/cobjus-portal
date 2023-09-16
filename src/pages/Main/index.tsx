import Image from 'next/image'
import styles from './page.module.css'
import { Grid, Stack } from '@mui/material'
import BGLogin from "@/assets/images/BG.svg"
export default function MainPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Image src={BGLogin} alt="Picture of the author" />
        </Stack>
      </Grid>
      <Grid item xs={6}>
      </Grid>
    </Grid>
  )
}
