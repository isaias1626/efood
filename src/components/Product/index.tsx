import Button from '../Button'

import {
  Card,
  CardItens,
  Descricao,
  Titulo,
  Notes,
  Avaiable,
  Infos
} from './styles'

import Estrela from '../../Assets/image/estrela.svg'
import Tag from '../Tag'
import { Producto } from '../../pages/Home'

type Props = {
  titulo: string
  descricao: string
  destacado: string[]
  foto: string
  avaliacao: number
  tipo: string[]
  products?: Producto[]
}

const Product = ({
  titulo,
  descricao,
  destacado,
  foto,
  avaliacao,
  products
}: Props) => {
  return (
    <Card>
      <img src={foto} alt={titulo} />
      <Infos>
        {destacado.map((destacados) => (
          <>
            <Tag key={destacados}>{destacados}</Tag>
          </>
        ))}
      </Infos>
      <CardItens>
        <Notes>
          <Titulo>{titulo}</Titulo>
          <Avaiable>
            <p>{avaliacao}</p>
            <img src={Estrela} alt="estrela" />
          </Avaiable>
        </Notes>
        <Descricao>{descricao}</Descricao>
        <Button
          type="link"
          to="/italiana"
          title={'clique aqui para ver mais informações do produto'}
        >
          Saiba mais
        </Button>
      </CardItens>
    </Card>
  )
}

export default Product
