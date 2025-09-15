import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemList'
import { db, initialized } from '../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const mockProducts = [
  { id: '1', title:'Café Espresso', price:120, stock:10, category:'cafe', description:'Intenso', image:'' },
  { id: '2', title:'Capuchino', price:180, stock:6, category:'cafe', description:'Con espuma', image:'' },
  { id: '3', title:'Mojito', price:250, stock:4, category:'bebidas', description:'Refrescante', image:'' },
]

export default function ItemListContainer(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    async function fetchProducts(){
      setLoading(true)
      try {
        if (initialized && db) {
          const q = collection(db, 'products')
          const snap = await getDocs(q)
          const items = snap.docs.map(d => ({ id: d.id, ...d.data() }))
          if (mounted) setProducts(items)
        } else {
          // fallback to mock
          if (mounted) setProducts(mockProducts)
        }
      } catch (e) {
        setError(e.message)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    fetchProducts()
    return () => { mounted = false }
  }, [])

  if (loading) return <div className="loader center">Cargando productos...</div>
  if (error) return <div className="center">Error: {error}</div>
  if (!products.length) return <div className="center">No hay productos disponibles</div>

  return <ItemList items={products} />
}
