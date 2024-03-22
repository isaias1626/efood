import {
  Card,
  Image,
  CardItens,
  Button,
  Modal,
  Close,
  ModalProduct
} from './styles'

import imagePopup from '../../../Assets/image/image_popup.png'
import close from '../../../Assets/image/close_1.svg'
import { ButtonContainer } from '../../Button/styles'
import { useState } from 'react'

type Props = {
  title: string
  description: string
  image: string
}

const Italiana = ({ title, description, image }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <div className="container">
      <Card>
        <Image>
          <img src={image} alt="s" />
        </Image>
        <CardItens>
          <h4>{title}</h4>
          <p>{description}</p>
          <Button onClick={() => setModalEstaAberto(true)}>
            Adcionar ao carrinho
          </Button>
        </CardItens>
      </Card>
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
              <img src={imagePopup} alt="imagem do produto" />
            </div>
            <div>
              <h4>Titulo</h4>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião. <br /> <br /> <br /> Serve: de 2 a
                3 pessoas
              </p>
              <ButtonContainer>
                Adicionar ao carrinho - <span>R$ 60,90</span>
              </ButtonContainer>
            </div>
          </ModalProduct>
        </div>
        <div className="overlay"></div>
      </Modal>
    </div>
  )
}

export default Italiana
