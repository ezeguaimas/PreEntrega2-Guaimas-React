import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Flex from "./Styles/Flex";
import Button from "./Button/Button";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <Flex>
      <Card sx={{ maxWidth: 345 }} style={{ margin: "5", padding: "3" }}>
        <CardActionArea>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ textAlign: "center" }}
          >
            {props.tipo}
          </Typography>

          <CardMedia
            component="img"
            image={props.foto}
            alt="foto producto"
            style={{ height: "200px", width: "140px", objectFit: "cover" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ textAlign: "center" }}
            >
              {props.marca}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              style={{ textAlign: "center" }}
            >
              ${props.precio}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/product/${props.id}`}>
            <Button size="small" color="primary">
              Ver detalle
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Flex>
  );
}

export default Item;
