import { useState } from 'react'
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
import { add, open } from '../../store/reducers/cart'
import { Producto } from '../../pages/Home'

export type Props = {
  products: Producto
}

const Category = ({ products }: Props) => {
  const dispatch = useDispatch()

  const addToCart = (item: Producto) => {
    dispatch(add(item))
    dispatch(open())
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

  const [modalIndex, setModalIndex] = useState(-1)

  return (
    <>
      {products.cardapio.map((item, index) => (
        <div className="container" key={index}>
          <ul>
            <li>
              <Card>
                <Image>
                  <img src={item.foto} alt="s" />
                </Image>
                <CardItens>
                  <h4>{item.nome}</h4>
                  <p>{getDescricao(item.descricao)}</p>
                  <Button
                    onClick={() => setModalIndex(index)}
                    type="button"
                    title={'clique aqui para ver mais informações do produto'}
                  >
                    Adicionar ao carrinho
                  </Button>
                </CardItens>
              </Card>
            </li>
          </ul>
          <Modal className={modalIndex === index ? 'visivel' : ''}>
            <div className="container">
              <Close>
                <img
                  src={close}
                  alt="icone de fechar"
                  onClick={() => setModalIndex(-1)}
                />
              </Close>
              <ModalProduct>
                <div>
                  <img src={item.foto} alt="imagem do produto" />
                </div>
                <div>
                  <h4>{item.nome}</h4>
                  <p>
                    {item.descricao} <br /> <br /> <br /> Serve: {item.porcao}
                  </p>
                  <ButtonContainer
                    onClick={() => addToCart({ ...products, cardapio: [item] })}
                    title="Clique aqui para adicionar ao carrinho"
                  >
                    Adicionar ao carrinho -{' '}
                    <span>R$: {formataPreco(item.preco)}</span>
                  </ButtonContainer>
                </div>
              </ModalProduct>
              <div className="overlay" onClick={() => setModalIndex(-1)}></div>
            </div>
          </Modal>
        </div>
      ))}
    </>
  )
}

export default Category
