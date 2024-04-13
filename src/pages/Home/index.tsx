import { useEffect, useState } from 'react'
import { useGetRestaurantQuery } from '../../services/api'
import { Loader } from '../../components/ProductListCategory/styles'

import ProdutctsList from '../../components/ProductsList'

export type Producto = {
  infos: string[]
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: product } = useGetRestaurantQuery()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader></Loader>
  }

  return <>{product && <ProdutctsList products={product} />}</>
}

export default Home
