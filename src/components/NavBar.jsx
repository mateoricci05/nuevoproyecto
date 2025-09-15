import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

export default function NavBar(){
  return (
    <nav className="nav container" role="navigation" aria-label="main navigation">
      <div className="brand"><Link to="/">Café La Quebrada</Link></div>
      <div style={{flex:1}}></div>
      <div style={{display:'flex', gap:'.6rem', alignItems:'center'}}>
        <Link to="/products" className="small">Catálogo</Link>
        <Link to="/products" className="small">Todos</Link>
        <Link to="/category/cafe" className="small">Café</Link>
        <Link to="/category/bebidas" className="small">Bebidas</Link>
        <CartWidget />
      </div>
    </nav>
  )
}
