import { useEffect, useState } from 'react'
import { List, Loader } from './styles'
import { useParams } from 'react-router-dom'
import Category from '../Category'
import { useGetProductQuery } from '../../services/api'

const ProductListCategory = () => {
  const { id } = useParams()
  const { data: product } = useGetProductQuery(id!)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader className="loader"></Loader>
  }

  if (!product) {
    return <h3>Produto não encontrado.</h3>
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
              serv={item.porcao}
              price={item.preco}
            />
          </li>
        ))}
      </List>
    </div>
  )
}

export default ProductListCategory
