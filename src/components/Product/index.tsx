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
import { useEffect, useState } from 'react'

export type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  avaliation: number
  category: string
  id: number
  destacted: string
}

const Product = ({
  title,
  description,
  infos,
  image,
  avaliation,
  id
}: Props) => {
  const [product, setProduct] = useState<Producto>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setProduct(res))
  }, [])

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
      <img src={image} alt={title} />
      <Infos>
        {infos.map((infos) => (
          <>
            <Tag key={infos}>{infos}</Tag>
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
        <Descricao>{getDescricao(description)}</Descricao>
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
