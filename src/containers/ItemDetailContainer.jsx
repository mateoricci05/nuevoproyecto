import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemDetail from "../components/ItemDetail";

function getProduct(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 1000);
  });
}

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProduct(itemId).then((res) => setProduct(res));
  }, [itemId]);

  return <div>{product ? <ItemDetail product={product} /> : <p>Cargando...</p>}</div>;
}

export default ItemDetailContainer;
