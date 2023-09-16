import { Link, Typography } from "@mui/material";

export default function Copyright(props: any) {
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