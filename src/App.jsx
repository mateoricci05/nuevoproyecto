import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import Cart from './components/Cart'
import CheckoutForm from './components/CheckoutForm'
import Home from './pages/Home'

export default function App(){
  return (
    <div>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path="/product/:productId" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<CheckoutForm/>} />
        </Routes>
      </main>
    </div>
  )
}
