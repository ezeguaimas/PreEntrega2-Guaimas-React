import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Flex from "./Styles/Flex";
import Button from "./Button/Button"

function MultiActionAreaCard(props) {
  return (
    <Flex>
      <Card sx={{ maxWidth: 345 }} style={{ margin: "5", padding: "3" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={props.foto}
            alt="foto producto"
            style={{height: "200px", width: "100%", objectFit: "cover"}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.tipo}
              <br />
              {props.marca}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${props.precio}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Agregar al carrito
          </Button>
        </CardActions>
      </Card>
    </Flex>
  );
}

export default MultiActionAreaCard;
