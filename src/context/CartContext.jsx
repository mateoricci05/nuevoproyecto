import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function useCart() { return useContext(CartContext) }

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('cart_v1')
      return raw ? JSON.parse(raw) : []
    } catch { return [] }
  })

  useEffect(() => {
    localStorage.setItem('cart_v1', JSON.stringify(cart))
  }, [cart])

  const addItem = (item, qty) => {
    setCart(prev => {
      const found = prev.find(p => p.id === item.id)
      if (found) {
        return prev.map(p => p.id === item.id ? { ...p, qty: Math.min(p.qty + qty, item.stock) } : p)
      }
      return [...prev, { ...item, qty }]
    })
  }

  const removeItem = (id) => setCart(prev => prev.filter(p => p.id !== id))
  const clear = () => setCart([])
  const totalItems = cart.reduce((s, p) => s + p.qty, 0)
  const totalPrice = cart.reduce((s, p) => s + p.qty * p.price, 0)

  return <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalItems, totalPrice }}>
    {children}
  </CartContext.Provider>
}
