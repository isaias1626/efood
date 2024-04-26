import { useDispatch } from 'react-redux'

import { close } from '../../store/reducers/cart'

import * as S from './styles'

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => {
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.CardContainer>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <S.Title>{title}</S.Title>
        {children}
      </S.Sidebar>
    </S.CardContainer>
  )
}

export default Card
