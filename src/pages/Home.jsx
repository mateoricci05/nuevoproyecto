import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <h1>Bienvenido a Café La Quebrada</h1>
      <p>Proyecto e-commerce de ejemplo para entrega del curso.</p>
      <div style={{display:'flex', gap:8}}>
        <Link to="/products" className="button">Ir al catálogo</Link>
      </div>
    </div>
  )
}
