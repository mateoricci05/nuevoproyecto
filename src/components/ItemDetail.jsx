import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function ItemDetail({ product }){
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  function handleAdd(qty){
    addItem(product, qty)
    setAdded(true)
  }

  return (
    <div className="card">
      <div style={{display:'flex', gap:20}}>
        <div style={{flex:'0 0 300px'}} className="center">
          <img src={product.image || 'https://via.placeholder.com/300x180?text=Producto'} alt={product.title} style={{maxWidth:'100%'}}/>
        </div>
        <div style={{flex:1}}>
          <h2>{product.title}</h2>
          <p className="small">{product.description}</p>
          <p><strong>Precio: </strong>${product.price}</p>
          <p><strong>Stock: </strong>{product.stock}</p>

          {!added ? (
            <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
          ) : (
            <div style={{display:'flex', gap:8}}>
              <Link to="/cart" className="button">Ir al carrito</Link>
              <Link to="/products" className="button">Seguir comprando</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
