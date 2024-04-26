import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Logo from '../../Assets/image/logo.svg'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'

export type Props = {
  titlePage: string
  subtitlePage: string
  image: string
}

const HeaderCategory = ({ titlePage, subtitlePage, image }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispath = useDispatch()

  const openCart = () => {
    dispath(open())
  }

  return (
    <S.HeaderStyle>
      <div className="container">
        <S.LogoEfood>
          <ul>
            <Link to="/" className="link">
              Restaurantes
            </Link>
          </ul>
          <Link to="/">
            <img src={Logo} alt="efood" />
          </Link>
          <S.CartButton onClick={openCart}>
            <li>{items.length} produto(s) no carrinho</li>
          </S.CartButton>
        </S.LogoEfood>
      </div>
      <S.BackgroundCategories>
        <div
          className="header-categories-config"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="container">
            <S.Texts>
              <p>{titlePage}</p>
              <h3>{subtitlePage}</h3>
            </S.Texts>
          </div>
        </div>
      </S.BackgroundCategories>
    </S.HeaderStyle>
  )
}

export default HeaderCategory
