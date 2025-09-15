import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({ item }){
  return (
    <article className="card" role="listitem">
      <div style={{height:120}} className="center">
        <img src={item.image || 'https://via.placeholder.com/200x120?text=Producto'} alt={item.title} style={{maxHeight:120}}/>
      </div>
      <h3>{item.title}</h3>
      <p className="small">{item.description}</p>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <strong>${item.price}</strong>
        <Link to={'/product/' + item.id} className="button small">Ver</Link>
      </div>
    </article>
  )
}
