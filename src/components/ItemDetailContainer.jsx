import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Flex from "./Styles/Flex";
import Button from "./Button/Button";

function ItemDetailContainer(props) {
  return (
    <Flex>
      <Card sx={{ maxWidth: 345 }} style={{ margin: "5", padding: "3" }}>
        <CardActionArea>

          <CardMedia
            component="img"
            height="140"
            image={props.foto}
            alt="foto producto"
          />

          <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {props.tipo}
          </Typography>

            <Typography gutterBottom variant="h5" component="div">
              {props.marca}
              <br />
              {props.subTipo}
              <br />
              {props.contenido}Ml
            </Typography>
            <Typography variant="h3" color="text.secondary">
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

export default ItemDetailContainer;
