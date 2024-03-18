import styled from 'styled-components'

import Fundo from '../../Assets/image/fundo.png'
import FundoCategory from '../../Assets/image/imagem_fundo.png'
import { cores } from '../../styles'

export const HeaderStyle = styled.header`
  background-image: url(${Fundo});
  height: 443px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 56px;
`

export const LogoEfood = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding-top: 40px;
  margin-bottom: 65px;
  font-weight: 900;
  font-size: 18px;

  img {
    width: 125px;
    margin-left: 85px;
  }
`
export const FundoCategories = styled.div`
  display: flex;
  background-image: url(${FundoCategory});
  height: 280px;
`
export const Textos = styled.div`
  display: block;

  p {
    font-size: 32px;
    color: ${cores.branca};
    line-height: 37px;
    font-weight: 100;
    margin-top: 25px;
    margin-bottom: 156px;
    opacity: 0.7;
  }

  h3 {
    font-size: 32px;
    color: ${cores.branca};
    line-height: 37px;
    font-weight: bold;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
