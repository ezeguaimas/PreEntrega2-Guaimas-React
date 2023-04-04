import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Flex from "./Styles/Flex";
import Button from "./Button/Button";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <Flex>
      <Card
        sx={{ maxMinWidth: 345, minWidth: 345 }}
        style={{ margin: "5", padding: "3" }}
      >
        <CardActionArea>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ textAlign: "center" }}
          >
            {props.tipo}
          </Typography>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={props.foto}
              alt="foto producto"
              style={{ maxWidth: "250px", maxHeight: "250px" }}
            />
          </div>

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
        <CardActions style={{ display: "flex", justifyContent: "center" }}>
          <Link to={`/product/${props.id}`}>
            <Button>Ver detalle</Button>
          </Link>
        </CardActions>
      </Card>
    </Flex>
  );
}

export default Item;
