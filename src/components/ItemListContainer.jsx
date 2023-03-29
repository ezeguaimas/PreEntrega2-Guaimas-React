import { useEffect, useState } from "react";
import Cards from "./Item";
import ProductosJSON from "./data/products.json";
import Flex from "./Styles/Flex";

function ItemsMap(props) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const getItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ProductosJSON);
      }, 3000);
    });
  };

  useEffect(() => {
    getItems().then((response) => {
      setProductos(response);
      setCargando(false);
    });
  }, []);

  if (cargando) {
    return (
      <p style={{ margin: "20%", paddingInline: "30%", fontSize: "5vmin" }}>
        Cargando datos...
      </p>
    );
  }

  return (
    <Flex>
      {productos.map((producto) => (
        <Cards
          key={producto.id}
          tipo={producto.tipo}
          marca={producto.marca}
          subTipo={producto.subTipo}
          contenido={producto.contenido}
          foto={producto.foto}
          precio={producto.precio}
          stock={producto.stock}
        />
      ))}
    </Flex>
  );
}

export default ItemsMap;

//import ItemsMap from "./ItemsMap";
//import Flex from "./Styles/Flex";
//
//function ItemListContainer() {
//  return (
//    <Flex>
//      <ItemsMap />
//    </Flex>
//  );
//}
//
//export default ItemListContainer;
