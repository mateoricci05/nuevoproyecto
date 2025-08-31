import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemList from "../components/ItemList";

function getProducts(categoryId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(products.filter((prod) => prod.category === categoryId));
      } else {
        resolve(products);
      }
    }, 1000);
  });
}

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId).then((res) => setItems(res));
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products={items} />
    </div>
  );
}

export default ItemListContainer;
