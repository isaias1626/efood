import { useState } from 'react'
import { useDispatch } from 'react-redux'

import close from '../../Assets/image/close_1.svg'
import { ButtonContainer } from '../Button/styles'
import { add, open } from '../../store/reducers/cart'
import { ParseToBrl } from '../../utils'

import * as S from './styles'

export type Props = {
  products: Producto
}

const Category = ({ products }: Props) => {
  const dispatch = useDispatch()

  const addToCart = (item: Producto) => {
    dispatch(add(item))
    dispatch(open())
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
              <S.Card>
                <S.Image>
                  <img src={item.foto} alt="s" />
                </S.Image>
                <S.CardItens>
                  <h4>{item.nome}</h4>
                  <p>{getDescricao(item.descricao)}</p>
                  <S.Button
                    onClick={() => setModalIndex(index)}
                    type="button"
                    title={'clique aqui para ver mais informações do produto'}
                  >
                    Adicionar ao carrinho
                  </S.Button>
                </S.CardItens>
              </S.Card>
            </li>
          </ul>
          <S.Modal className={modalIndex === index ? 'visivel' : ''}>
            <div className="container">
              <S.Close>
                <img
                  src={close}
                  alt="icone de fechar"
                  onClick={() => setModalIndex(-1)}
                />
              </S.Close>
              <S.ModalProduct>
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
                    <span>R$: {ParseToBrl(item.preco)}</span>
                  </ButtonContainer>
                </div>
              </S.ModalProduct>
              <div className="overlay" onClick={() => setModalIndex(-1)}></div>
            </div>
          </S.Modal>
        </div>
      ))}
    </>
  )
}

export default Category
