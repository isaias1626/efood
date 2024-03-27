import { Link } from 'react-router-dom'
import Logo from '../../Assets/image/logo.svg'
import { FundoCategories, HeaderStyle, LogoEfood, Textos } from './styles'

export type Props = {
  titlePage: string
  subtitlePage: string
  image: string
}

const HeaderCategory = ({ titlePage, subtitlePage, image }: Props) => {
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
          <ul>
            <li>0 produto(s) no carrinho</li>
          </ul>
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
