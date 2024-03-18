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
import Botton from '../Button'

export type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  avaliation: number
  category: string[]
}

const Product = ({
  title,
  description,
  infos,
  image,
  avaliation,
  category
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <>
          <Tag key={info}>{info}</Tag>
        </>
      ))}
      {category.map((category) => (
        <>
          <Tag key={category}>{category}</Tag>
        </>
      ))}
    </Infos>
    <CardItens>
      <Notes>
        <Titulo>{title}</Titulo>
        <Avaiable>
          <p>{avaliation}</p>
          <img src={Estrela} alt="estrela" />
        </Avaiable>
      </Notes>
      <Descricao>{description}</Descricao>
      <Botton
        type="link"
        to="/categories"
        title={'clique aqui para ver mais informações do produto'}
      >
        Saiba mais
      </Botton>
    </CardItens>
  </Card>
)

export default Product
