import { Producto } from '../Home'
import HeaderCategory from '../../components/HeaderCategory'

type Props = {
  products: Producto[]
}

const HeaderCategoriesConfig = ({ products }: Props) => {
  return (
    <div>
      {products.map((prd) => (
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
