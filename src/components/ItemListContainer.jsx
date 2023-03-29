import { useEffect, useState } from "react";
import Item from "./Item";
import ProductosJSON from "./data/products.json";
import Flex from "./Styles/Flex";
import { useParams } from "react-router-dom";

function getItems() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(ProductosJSON);
    }, 1000);
  });

  return promise;
}

function getItemsByCategory(categoryURL) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const filtro = ProductosJSON.filter((item) => item.tipo === categoryURL);
      resolve(filtro);
    }, 1000);
  });

  return promise;
}

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryid } = useParams();

  useEffect(() => {
    getItems().then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    if (categoryid === undefined) {
      getItems().then((response) => {
        setProducts(response);
        setLoading(false);
      });
    } else {
      getItemsByCategory(categoryid).then((response) => {
        setProducts(response);
        setLoading(false);
      });
    }
  }, [categoryid]);

  return (
    <Flex>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        products.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            tipo={product.tipo.toUpperCase()}
            marca={product.marca.toUpperCase()}
            subTipo={product.subTipo.toUpperCase()}
            contenido={product.contenido}
            foto={product.foto}
            precio={product.precio}
            stock={product.stock}
          />
        ))
      )}
    </Flex>
  );
}

export default ItemListContainer;
