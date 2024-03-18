import styled from 'styled-components'
import Fundo from '../../Assets/image/fundo.png'

export const HeaderStyle = styled.header`
  background-image: url(${Fundo});
  height: 360px;
  background-size: cover;
  background-repeat: no-repeat;
`

export const LogoEfood = styled.div`
  text-align: center;
  padding-top: 40px;

  img {
    width: 125px;
  }
`
