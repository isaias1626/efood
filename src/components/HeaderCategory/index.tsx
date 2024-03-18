import { Link } from 'react-router-dom'
import Logo from '../../Assets/image/logo.svg'
import { FundoCategories, HeaderStyle, LogoEfood, Textos } from './styles'

const HeaderCategory = () => (
  <HeaderStyle>
    <div className="container">
      <LogoEfood>
        <ul>
          <li>Restaurantes</li>
        </ul>
        <Link to="/">
          <img src={Logo} alt="efood" />
        </Link>
        <ul>
          <li>0 produto(s) no carrinho</li>
        </ul>
      </LogoEfood>
    </div>
    <FundoCategories>
      <div className="container">
        <Textos>
          <p>Italiana</p>
          <h3>La Dolce Vita Trattoria</h3>
        </Textos>
      </div>
    </FundoCategories>
  </HeaderStyle>
)

export default HeaderCategory
