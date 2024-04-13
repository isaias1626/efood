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

import { useGetRestaurantQuery } from '../../services/api'

export type Props = {
  titulo: string
  descricao: string
  infos: string[]
  capa: string
  avaliacao: number
  tipo: string
  id: number
  destacado: boolean
}

const Product = ({
  titulo,
  descricao,
  infos,
  capa,
  avaliacao,
  id,
  destacado
}: Props) => {
  const { data: product } = useGetRestaurantQuery()

  if (!product) {
    return <h3>Carregando...</h3>
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 248) {
      return descricao.slice(0, 245) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={capa} alt={titulo} />
      <Infos>
        {destacado && <Tag>Destaque do Dia</Tag>}{' '}
        {infos.map((infos) => (
          <Tag key={infos}>{infos}</Tag>
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
        <Descricao>{getDescricao(descricao)}</Descricao>
        <Button
          type="link"
          to={`/categories/${id}`}
          title={'clique aqui para ver mais informações do produto'}
        >
          Saiba mais
        </Button>
      </CardItens>
    </Card>
  )
}

export default Product
