import { Link } from 'react-router-dom'
import Logo from '../../Assets/image/logo.svg'
import {
  FundoCategories,
  HeaderStyle,
  LogoEfood,
  Textos,
  CartButton
} from './styles'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

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
    <HeaderStyle>
      <div className="container">
        <LogoEfood>
          <ul>
            <Link to="/" className="link">
              Restaurantes
            </Link>
          </ul>
          <Link to="/">
            <img src={Logo} alt="efood" />
          </Link>
          <CartButton onClick={openCart}>
            <li>{items.length} produto(s) no carrinho</li>
          </CartButton>
        </LogoEfood>
      </div>
      <FundoCategories>
        <div
          className="header-categories-config"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="container">
            <Textos>
              <p>{titlePage}</p>
              <h3>{subtitlePage}</h3>
            </Textos>
          </div>
        </div>
      </FundoCategories>
    </HeaderStyle>
  )
}

export default HeaderCategory
