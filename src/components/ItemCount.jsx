import React, { useState } from 'react'

export default function ItemCount({ stock = 0, initial = 1, onAdd }){
  const [qty, setQty] = useState(initial)

  function inc(){ setQty(q => Math.min(q+1, stock)) }
  function dec(){ setQty(q => Math.max(q-1, 1)) }

  return (
    <div style={{display:'flex', gap:8, alignItems:'center'}}>
      <button className="button" onClick={dec} disabled={qty<=1}>-</button>
      <div className="small">{qty}</div>
      <button className="button" onClick={inc} disabled={qty>=stock}>+</button>
      <button className="button" onClick={() => onAdd(qty)} disabled={stock<=0}>Agregar al carrito</button>
    </div>
  )
}
