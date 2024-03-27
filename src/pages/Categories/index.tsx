import { useEffect, useState } from 'react'
import ProductListCategory from '../../components/ProductListCategory'

import { Producto } from '../Home'

const Categories = () => {
  const [prdItaliana, setPrdItaliana] = useState<Producto[]>([])
  const [prdArabe, setPrdArabe] = useState<Producto[]>([])
  const [prdJapones, setPrdJapones] = useState<Producto[]>([])
  const [prdPortugues, setPrdPortugues] = useState<Producto[]>([])
  const [prdPizzaria, setPrdPizzaria] = useState<Producto[]>([])
  const [prdVegano, setPrdVegano] = useState<Producto[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/1`)
      .then((res) => res.json())
      .then((res) => setPrdItaliana(res))

    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/2')
      .then((res) => res.json())
      .then((res) => setPrdArabe(res))

    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/3')
      .then((res) => res.json())
      .then((res) => setPrdJapones(res))

    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/4')
      .then((res) => res.json())
      .then((res) => setPrdPortugues(res))

    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/5')
      .then((res) => res.json())
      .then((res) => setPrdPizzaria(res))

    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/6')
      .then((res) => res.json())
      .then((res) => setPrdVegano(res))
  }, [])

  return (
    <>
      <ProductListCategory products={prdItaliana} />
      <ProductListCategory products={prdArabe} />
      <ProductListCategory products={prdJapones} />
      <ProductListCategory products={prdPortugues} />
      <ProductListCategory products={prdPizzaria} />
      <ProductListCategory products={prdVegano} />
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
