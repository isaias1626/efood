import { Producto } from '../../pages/Home'
import Product from '../Product'
import { List, Container } from './styles'

export type Props = {
  products: Producto[]
}

const ProdutctsList = ({ products }: Props) => {
  const getProductTags = (prd: Producto) => {
    const tags = []

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
                descricao={prd.descricao}
                capa={prd.capa}
                infos={getProductTags(prd)}
                tipo={prd.tipo}
                avaliacao={prd.avaliacao}
                titulo={prd.titulo}
                id={prd.id}
                destacado={prd.destacado}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProdutctsList
