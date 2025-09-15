import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

export default function Cart(){
  const { cart, totalPrice, clear } = useCart()

  if (!cart.length) return <div className="center card">
    <h3>Carrito vacío</h3>
    <Link to="/products" className="button">Ver productos</Link>
  </div>

  return (
    <div>
      <h2>Tu carrito</h2>
      <div style={{display:'grid', gap:8}}>
        {cart.map(p => <CartItem key={p.id} item={p} />)}
      </div>
      <div style={{marginTop:12}}>
        <strong>Total: ${totalPrice}</strong>
      </div>
      <div style={{marginTop:12, display:'flex', gap:8}}>
        <Link to="/checkout" className="button">Finalizar compra</Link>
        <button className="button" onClick={clear}>Vaciar carrito</button>
      </div>
    </div>
  )
}
