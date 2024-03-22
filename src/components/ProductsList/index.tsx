import { Producto } from '../../pages/Home'
import Product from '../Product'
import { List, Container } from './styles'

export type Props = {
  products: Producto[]
}

const ProdutctsList = ({ products }: Props) => {
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getProductTags = (prd: Producto) => {
    const tags = []

    if (prd.destacado) {
      tags.push(prd.destacado)
    }

    if (prd.cardapio.preco) {
      tags.push(formataPreco(prd.cardapio.preco))
    }

    return tags
  }

  return (
    <Container>
      <div className="container">
        <List>
          {products.map((prd) => (
            <Product
              key={prd.id}
              descricao={prd.cardapio.descricao}
              foto={prd.cardapio.foto}
              destacado={getProductTags(prd)}
              tipo={prd.tipo}
              avaliacao={prd.avaliacao}
              titulo={prd.cardapio.nome}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProdutctsList
