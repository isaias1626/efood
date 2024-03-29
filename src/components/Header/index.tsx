import { Link } from 'react-router-dom'
import Logo from '../../Assets/image/logo.svg'
import { HeaderStyle, LogoEfood, Title } from './styles'

const Header = () => (
  <HeaderStyle>
    <LogoEfood>
      <Link to="/">
        <img src={Logo} alt="efood" />
      </Link>
    </LogoEfood>
    <Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Title>
  </HeaderStyle>
)

export default Header
