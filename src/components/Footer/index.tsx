import { LinkStyle, Logo, Sociais, Texto } from './styles'
import { FooterBack } from './styles'

import Logomarca from '../../Assets/image/logo.svg'

import Instagram from '../../Assets/image/instagram.svg'
import Facebook from '../../Assets/image/facebook.svg'
import Twitter from '../../Assets/image/twitter.svg'
import { Link } from 'react-router-dom'

const Footer = () => (
  <FooterBack>
    <div className="container">
      <Logo>
        <Link to="/">
          <img src={Logomarca} alt="efood" />
        </Link>
      </Logo>
      <Sociais>
        <LinkStyle target="_blank" href="https://instagram.com">
          <img src={Instagram} alt="instagram" />
        </LinkStyle>
        <LinkStyle target="_blank" href="https://facebook.com">
          <img src={Facebook} alt="facebook" />
        </LinkStyle>
        <LinkStyle target="_blank" href="https://twitter.com">
          <img src={Twitter} alt="twitter" />
        </LinkStyle>
      </Sociais>
      <Texto>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </Texto>
    </div>
  </FooterBack>
)

export default Footer
