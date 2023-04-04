import React, { useState } from "react";
import Button from "./Button/Button";

function ItemCount() {
  const [count, setCount] = useState(0);

  function handleSumar() {
    setCount(count + 1);
  }
  function handleRestar() {
    setCount(count - 1);
  }

  return (
    <div>
      <button color="black" onClick={handleRestar}>
        -
      </button>
      <span> {count} </span>
      <button color="black" onClick={handleSumar}>
        +
      </button>
      <Button>Agregar al carrito</Button>
    </div>
  );
}

export default ItemCount;
