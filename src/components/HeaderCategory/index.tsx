import { Link } from 'react-router-dom'
import Logo from '../../Assets/image/logo.svg'
import { HeaderStyle, LogoEfood } from './styles'

const HeaderCategory = () => (
  <HeaderStyle>
    <LogoEfood>
      <Link to="/">
        <img src={Logo} alt="efood" />
      </Link>
    </LogoEfood>
  </HeaderStyle>
)

export default HeaderCategory
