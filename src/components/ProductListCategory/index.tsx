import { Producto } from '../../pages/Home'
import Italiana from '../Category/italiana'
import { List } from './styles'

export type Props = {
  products: Producto[]
}

const ProductListCategory = ({ products }: Props) => {
  return (
    <div className="container">
      <List>
        {products.map((prd) => (
          <Italiana
            key={prd.id}
            title={prd.titulo}
            description={prd.descricao}
            image={prd.capa}
          />
        ))}
      </List>
    </div>
  )
}

export default ProductListCategory
