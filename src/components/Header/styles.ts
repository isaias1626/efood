import styled from 'styled-components'
import Fundo from '../../Assets/image/fundo.png'
import { breakpoints } from '../../styles'

export const HeaderStyle = styled.header`
  background-image: url(${Fundo});
  height: 360px;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const LogoEfood = styled.div`
  text-align: center;
  padding-top: 40px;

  img {
    width: 125px;
  }
`
export const Title = styled.h1`
  line-height: 42px;
  text-align: center;
  font-size: 36px;
  padding-top: 138px;
  font-weight: bold;
`
