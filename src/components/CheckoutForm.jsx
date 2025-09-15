import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { db, initialized } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function CheckoutForm(){
  const { cart, totalPrice, clear } = useCart()
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [form, setForm] = useState({ name:'', email:'', phone:'' })
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    setError(null)
    if (!form.name || !form.email) { setError('Complete nombre y email'); return }
    setLoading(true)
    try {
      const order = {
        buyer: form,
        items: cart,
        total: totalPrice,
        createdAt: serverTimestamp()
      }
      if (initialized && db) {
        const ordersRef = collection(db, 'orders')
        const docRef = await addDoc(ordersRef, order)
        setOrderId(docRef.id)
      } else {
        // simulate
        setOrderId('SIMULATED-' + Math.random().toString(36).slice(2,9).toUpperCase())
      }
      clear()
    } catch (e) {
      setError(e.message)
    } finally { setLoading(false) }
  }

  if (orderId) return (
    <div className="card center">
      <h3>¡Compra confirmada!</h3>
      <p>Id de la orden: <strong>{orderId}</strong></p>
      <button className="button" onClick={() => navigate('/')}>Volver al inicio</button>
    </div>
  )

  return (
    <div className="card" style={{maxWidth:600}}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} style={{display:'grid', gap:8}}>
        <input placeholder="Nombre" value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>
        <input placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}/>
        <input placeholder="Teléfono" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}/>
        <div>Total a pagar: ${totalPrice}</div>
        {error && <div style={{color:'red'}}>{error}</div>}
        <div style={{display:'flex', gap:8}}>
          <button className="button" type="submit" disabled={loading}>Confirmar compra</button>
        </div>
      </form>
    </div>
  )
}
