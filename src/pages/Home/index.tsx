import { useEffect, useState } from 'react'
import ProdutctsList from '../../components/ProductsList'

export type Producto = {
  category: string
  avaliation: number
  infos: string[]
  id: number
  titulo: string
  destacado: string
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
  const [produtos, setProdutos] = useState<Producto[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  return (
    <>
      <ProdutctsList products={produtos} />
    </>
  )
}

export default Home
