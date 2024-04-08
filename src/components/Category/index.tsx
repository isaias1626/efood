import { useState } from 'react'
import { useGetProductQuery } from '../../services/api'
import { useParams } from 'react-router-dom'

import {
  Card,
  Image,
  CardItens,
  Button,
  Modal,
  Close,
  ModalProduct
} from './styles'

import close from '../../Assets/image/close_1.svg'
import { ButtonContainer } from '../Button/styles'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'
import { Producto } from '../../pages/Home'

export type Props = {
  title: string
  description: string
  image: string
  serv: string
  price: number
}

const Category = ({ title, description, image, serv, price }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add())
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
      preco
    )
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 100) {
      return descricao.slice(0, 103) + '...'
    }
    return descricao
  }

  const [modalEstaAberto, setModalEstaAberto] = useState(false)

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
            <ModalProduct>
              <div>
                <img src={image} alt="imagem do produto" />
              </div>
              <div>
                <h4>{title}</h4>
                <p>
                  {description} <br /> <br /> <br /> Serve: {serv}
                </p>
                <ButtonContainer
                  onClick={addToCart}
                  title="Clique aqui para adicionar ao carrinho"
                >
                  Adicionar ao carrinho - <span>R$: {formataPreco(price)}</span>
                </ButtonContainer>
              </div>
            </ModalProduct>
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
