import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import main from '../../Assets/image/iconmonstr-menu-2-240.png'
import cart from '../../Assets/image/iconmonstr-basket-3-240.png'
import Logo from '../../Assets/image/logo.svg'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useState } from 'react'

import * as S from './styles'

export type Props = {
  titlePage: string
  subtitlePage: string
  image: string
}

const HeaderCategory = ({ titlePage, subtitlePage, image }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const dispath = useDispatch()

  const openCart = () => {
    dispath(open())
  }

  return (
    <S.HeaderStyle>
      <div className="container">
        <S.LogoEfood>
          <ul>
            <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img src={main} alt="main" />
            </S.Hamburguer>
            <Link to="/" className="link">
              Restaurantes
            </Link>
          </ul>
          <Link to="/">
            <img src={Logo} alt="efood" />
          </Link>
          <S.CartButton onClick={openCart}>
            <S.Cart>
              <span>{items.length}</span> <img src={cart} alt="cart" />
            </S.Cart>
          </S.CartButton>
        </S.LogoEfood>
      </div>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.HeaderRow>
          <div>
            <h3>Restaurantes</h3>
            <ul>
              <Link to="/categories/1" className="link">
                <li>Italiana</li>
              </Link>
              <Link to="/categories/2" className="link">
                <li>Árabe</li>
              </Link>
              <Link to="/categories/3" className="link">
                <li>Japonês</li>
              </Link>
              <Link to="/categories/4" className="link">
                <li>Português</li>
              </Link>
              <Link to="/categories/5" className="link">
                <li>Pizzaria</li>
              </Link>
              <Link to="/categories/6" className="link">
                <li>Vegano</li>
              </Link>
            </ul>
          </div>
        </S.HeaderRow>
      </S.NavMobile>
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
