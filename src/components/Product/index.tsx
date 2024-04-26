import Button from '../Button'
import Estrela from '../../Assets/image/estrela.svg'
import Tag from '../Tag'
import { useGetRestaurantQuery } from '../../services/api'
import Loader from '../Loader'

import * as S from './styles'

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
    return <Loader />
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 248) {
      return descricao.slice(0, 245) + '...'
    }
    return descricao
  }

  return (
    <S.Card>
      <img src={capa} alt={titulo} />
      <S.Infos>
        {destacado && <Tag>Destaque do Dia</Tag>}{' '}
        {infos.map((infos) => (
          <Tag key={infos}>{infos}</Tag>
        ))}
      </S.Infos>
      <S.CardItens>
        <S.Notes>
          <S.Title>{titulo}</S.Title>
          <S.Avaiable>
            <p>{avaliacao}</p>
            <img src={Estrela} alt="estrela" />
          </S.Avaiable>
        </S.Notes>
        <S.Description>{getDescricao(descricao)}</S.Description>
        <Button
          type="link"
          to={`/categories/${id}`}
          title={'clique aqui para ver mais informações do produto'}
        >
          Saiba mais
        </Button>
      </S.CardItens>
    </S.Card>
  )
}

export default Product
