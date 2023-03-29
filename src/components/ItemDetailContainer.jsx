import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductosJSON from "./data/products.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Flex from "./Styles/Flex";
import Button from "./Button/Button";

function getSingleItem(idURL) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const itemPedido = ProductosJSON.find((item) => {
        return item.id === parseInt(idURL);
      });
      resolve(itemPedido);
    }, 1000);
  });

  return promise;
}

function ItemDetailContainer() {
  const [product, setProduct] = useState({});

  let { productid } = useParams();

  useEffect(() => {
    getSingleItem(productid).then((response) => {
      setProduct(response);
    });
  }, [productid]);

  return (
    <Flex>
      <Card sx={{ maxWidth: 345 }} style={{ margin: "5", padding: "3" }}>
        <CardActionArea>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ textAlign: "center", textTransform: "uppercase" }}
          >
            {product.tipo}
          </Typography>

          <CardMedia
            component="img"
            image={product.foto}
            alt="foto producto"
            style={{ width: "180px", objectFit: "cover" }}
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ textAlign: "center", textTransform: "uppercase" }}
            >
              {product.marca}
              <br />
              {product.subTipo}
              <br />
              {product.contenido}Ml
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              style={{ textAlign: "center" }}
            >
              ${product.precio}
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
