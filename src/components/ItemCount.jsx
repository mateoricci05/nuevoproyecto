import { useState } from "react";

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={increment}>+</button>
      <button style={{ marginLeft: "10px" }}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
