import { Button, Grid } from "@mui/material";

export default function NavButtons() {
  return (
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
  )
}