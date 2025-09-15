import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail'
import { db, initialized } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

const mockProducts = {
  '1': { id: '1', title:'Café Espresso', price:120, stock:10, category:'cafe', description:'Intenso', image:'' },
  '2': { id: '2', title:'Capuchino', price:180, stock:6, category:'cafe', description:'Con espuma', image:'' },
  '3': { id: '3', title:'Mojito', price:250, stock:4, category:'bebidas', description:'Refrescante', image:'' },
}

export default function ItemDetailContainer(){
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    async function load(){
      setLoading(true)
      try {
        if (initialized && db) {
          const ref = doc(db, 'products', productId)
          const snap = await getDoc(ref)
          if (snap.exists()) {
            if (mounted) setProduct({ id: snap.id, ...snap.data() })
          } else {
            if (mounted) setError('Producto no encontrado')
          }
        } else {
          if (mockProducts[productId]) setProduct(mockProducts[productId])
          else setError('Producto no encontrado')
        }
      } catch (e) { setError(e.message) }
      finally { if (mounted) setLoading(false) }
    }
    load()
    return () => { mounted = false }
  }, [productId])

  if (loading) return <div className="loader center">Cargando detalle...</div>
  if (error) return <div className="center">Error: {error}</div>
  if (!product) return <div className="center">No se encontró el producto</div>

  return <ItemDetail product={product} />
}
