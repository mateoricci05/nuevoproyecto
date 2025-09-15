import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartWidget(){
  const { totalItems } = useCart()
  return (
    <Link to="/cart" aria-label="Ver carrito" style={{display:'flex', alignItems:'center', gap:8}}>
      <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="carrito" width="22" />
      <span className="badge">{totalItems}</span>
    </Link>
  )
}
