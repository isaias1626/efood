import { ButtonContainer } from '../Button/styles'
import { ModalProduct } from './styles'

type Props = {
  title: string
  description: string
  image: string
  serv: string
  price: number
}

const ModalInfos = ({ title, description, image, serv, price }: Props) => {
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
      preco
    )
  }

  return (
    <ModalProduct>
      <div>
        <img src={image} alt="imagem do produto" />
      </div>
      <div>
        <h4>{title}</h4>
        <p>
          {description} <br /> <br /> <br /> Serve: {serv}
        </p>
        <ButtonContainer title="Clique aqui para adicionar ao carrinho">
          Adicionar ao carrinho - <span>R$: {formataPreco(price)}</span>
        </ButtonContainer>
      </div>
    </ModalProduct>
  )
}

export default ModalInfos
