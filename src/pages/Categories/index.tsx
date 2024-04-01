import { useEffect, useState } from 'react'
import ProductListCategory from '../../components/ProductListCategory'

import { Producto } from '../Home'

const Categories = () => {
  const [prdItem, setPrdItem] = useState<Producto[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setPrdItem(res))
  }, [])

  if (!prdItem) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <ProductListCategory />
    </>
  )
}

export default Categories

//italiana
//árabe
//japonês
//português
//pizzaria
//vegano
