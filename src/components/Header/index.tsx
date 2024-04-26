import { Link } from 'react-router-dom'

import Logo from '../../Assets/image/logo.svg'

import * as S from './styles'

const Header = () => (
  <S.HeaderStyle>
    <S.LogoEfood>
      <Link to="/">
        <img src={Logo} alt="efood" />
      </Link>
    </S.LogoEfood>
    <S.Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </S.Title>
  </S.HeaderStyle>
)

export default Header
