import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Precio: </strong>${product.price}</p>
      <ItemCount stock={10} initial={1} />
    </div>
  );
}

export default ItemDetail;
