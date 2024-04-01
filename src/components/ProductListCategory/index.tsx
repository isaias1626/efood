import { useEffect, useState } from 'react'
import { List } from './styles'
import { useParams } from 'react-router-dom'
import { Producto } from '../../pages/Home'
import Category from '../Category'

const ProductListCategory = () => {
  const { id } = useParams()

  const [product, setProduct] = useState<Producto>()

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
      preco
    )
  }

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res))
  }, [id])

  if (!product) {
    return <h3>Carregando...</h3>
  }

  return (
    <div className="container">
      <List>
        {product.cardapio.map((item) => (
          <li key={item.id}>
            <Category
              title={item.nome}
              description={item.descricao}
              image={item.foto}
              id={item.id}
              serv={item.porcao}
              price={formataPreco(item.preco)}
            />
          </li>
        ))}
      </List>
    </div>
  )
}

export default ProductListCategory
