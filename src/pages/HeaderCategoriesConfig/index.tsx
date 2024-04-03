import { Producto } from '../Home'
import HeaderCategory from '../../components/HeaderCategory'
import { useParams } from 'react-router-dom'

type Props = {
  products: Producto[]
}

const HeaderCategoriesConfig = ({ products }: Props) => {
  const { id } = useParams<{ id: string }>()

  const filteredProducts = id
    ? products.filter((prd) => prd.id === parseInt(id))
    : []

  if (!products) {
    return <h3>Carregando...</h3>
  }

  return (
    <div>
      {filteredProducts.map((prd) => (
        <HeaderCategory
          key={prd.id}
          titlePage={prd.tipo}
          subtitlePage={prd.titulo}
          image={prd.capa}
        />
      ))}
    </div>
  )
}

export default HeaderCategoriesConfig
