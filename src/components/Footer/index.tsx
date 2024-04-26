import { Link } from 'react-router-dom'

import Logomarca from '../../Assets/image/logo.svg'
import Instagram from '../../Assets/image/instagram.svg'
import Facebook from '../../Assets/image/facebook.svg'
import Twitter from '../../Assets/image/twitter.svg'

import * as S from './styles'
import { FooterBack } from './styles'

const Footer = () => (
  <FooterBack>
    <div className="container">
      <S.Logo>
        <Link title="clique aqui para voltar a pagina home" to="/">
          <img src={Logomarca} alt="efood" />
        </Link>
      </S.Logo>
      <S.Sociais>
        <S.LinkStyle
          title="clique aqui para acessar nosso instagram"
          target="_blank"
          href="https://instagram.com"
        >
          <img src={Instagram} alt="instagram" />
        </S.LinkStyle>
        <S.LinkStyle
          title="clique aqui para acessar nosso facebook"
          target="_blank"
          href="https://facebook.com"
        >
          <img src={Facebook} alt="facebook" />
        </S.LinkStyle>
        <S.LinkStyle
          title="clique aqui para acessar nosso twitter"
          target="_blank"
          href="https://twitter.com"
        >
          <img src={Twitter} alt="twitter" />
        </S.LinkStyle>
      </S.Sociais>
      <S.Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </S.Text>
    </div>
  </FooterBack>
)

export default Footer
