import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartItem({ item }){
  const { removeItem } = useCart()
  return (
    <div className="card" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <img src={item.image || 'https://via.placeholder.com/90'} alt={item.title} style={{width:90}}/>
        <div>
          <h4>{item.title}</h4>
          <div className="small">Cantidad: {item.qty}</div>
          <div className="small">Subtotal: ${item.qty * item.price}</div>
        </div>
      </div>
      <div>
        <button className="button" onClick={() => removeItem(item.id)}>Eliminar</button>
      </div>
    </div>
  )
}
