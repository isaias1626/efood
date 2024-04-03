import { useState } from 'react'
import { useGetProductQuery } from '../../services/api'
import { useParams } from 'react-router-dom'

import { Card, Image, CardItens, Button, Modal, Close } from './styles'
import close from '../../Assets/image/close_1.svg'

import ModalInfos from '../Modal'

export type Props = {
  title: string
  description: string
  image: string
  serv: string
  price: number
}

const Category = ({ title, description, image }: Props) => {
  const { id } = useParams()
  const { data: product } = useGetProductQuery(id!)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 100) {
      return descricao.slice(0, 103) + '...'
    }
    return descricao
  }

  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  if (!product) {
    return <h3>Produto não encontrado.</h3>
  }

  console.log(product)

  return (
    <>
      <div className="container">
        <ul>
          <li>
            <Card>
              <Image>
                <img src={image} alt="s" />
              </Image>
              <CardItens>
                <h4>{title}</h4>
                <p>{getDescricao(description)}</p>
                <Button
                  onClick={() => setModalEstaAberto(true)}
                  type="button"
                  title={'clique aqui para ver mais informações do produto'}
                >
                  Adicionar ao carrinho
                </Button>
              </CardItens>
            </Card>
          </li>
        </ul>
        <Modal className={modalEstaAberto ? 'visivel' : ''}>
          <div className="container">
            <Close>
              <img
                src={close}
                alt="icone de fechar"
                onClick={() => setModalEstaAberto(false)}
              />
            </Close>
            {modalEstaAberto &&
              product.cardapio.map((item) => (
                <div key={item.id}>
                  <ModalInfos
                    title={item.nome}
                    description={item.descricao}
                    image={item.foto}
                    serv={item.porcao}
                    price={item.preco}
                  />
                </div>
              ))}
          </div>
          <div
            className="overlay"
            onClick={() => setModalEstaAberto(false)}
          ></div>
        </Modal>
      </div>
    </>
  )
}

export default Category
