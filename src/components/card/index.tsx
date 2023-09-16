import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function BillCard({ title, logoUrl, description }: any) {

  const cardStyle = {
    maxWidth: 1080,
    maxHeight: 720,
    border: '1px solid gray',
    borderRadius: 4
  }

  return (
    <Card sx={cardStyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          src={logoUrl}
        />
        <CardContent sx={{ margin: "10%" }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
