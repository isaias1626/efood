import { Producto } from '../../pages/Home'
import Product from '../Product'
import { List, Container } from './styles'

export type Props = {
  products: Producto[]
}

const ProdutctsList = ({ products }: Props) => {
  const getProductTags = (prd: Producto) => {
    const tags = []

    if (prd.destacado) {
      tags.push(prd.destacado)
    }

    if (prd.tipo) {
      tags.push(prd.tipo)
    }

    return tags
  }

  return (
    <Container>
      <div className="container">
        <List>
          {products.map((prd) => (
            <li key={prd.id}>
              <Product
                description={prd.descricao}
                image={prd.capa}
                infos={getProductTags(prd)}
                category={prd.tipo}
                avaliation={prd.avaliacao}
                title={prd.titulo}
                id={prd.id}
                destacted={prd.destacado}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProdutctsList
