import {
  Card,
  Image,
  CardItens,
  Button,
  Modal,
  Close,
  ModalProduct
} from './styles'

import imagePopup from '../../Assets/image/image_popup.png'
import close from '../../Assets/image/close_1.svg'
import { ButtonContainer } from '../Button/styles'
import { useEffect, useState } from 'react'
import { Producto } from '../../pages/Home'

export type Props = {
  title: string
  description: string
  image: string
  id: number
  serv: string
  price: string
}

const Category = ({ title, description, image, serv, price }: Props) => {
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
                  {description} <br /> <br /> <br /> Serve: de {serv}
                </p>
                <ButtonContainer>
                  Adicionar ao carrinho - <span>R$: {price}</span>
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
