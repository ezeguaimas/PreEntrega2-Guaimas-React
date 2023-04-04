import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductosJSON from "./data/products.json";
import Flex from "./Styles/Flex";
import Button from "./Button/Button";
import ItemCount from "./ItemCount";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function getSingleItem(idURL) {
  const promise = new Promise((resolve) => {
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
      <Card
        sx={{ maxMinWidth: 400, minWidth: 400 }}
        style={{ margin: "5", padding: "3" }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ textAlign: "center", textTransform: "uppercase" }}
        >
          {product.tipo}
        </Typography>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={product.foto}
            alt="foto producto"
            style={{ maxWidth: "180px", maxHeight: "180px" }}
          />
        </div>

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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to={`/product/${product.id - 1}`}>
            <Button color="black">Anterior</Button>
          </Link>

          <Link to={`/product/${product.id + 1}`}>
            <Button color="black">Siguiente</Button>
          </Link>
        </div>
        <ItemCount />
      </Card>
    </Flex>
  );
}

export default ItemDetailContainer;
