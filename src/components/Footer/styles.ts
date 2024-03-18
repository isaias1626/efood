import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterBack = styled.div`
  background-color: ${cores.amarelo};
  height: 298px;
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;

  img {
    width: 125px;
  }
`

export const Sociais = styled.ul`
  display: flex;
  justify-content: center;
  padding-top: 32px;
  padding-bottom: 80px;

  img {
    width: 24px;
    margin-left: 4px;
    margin-right: 4px;
  }
`
export const Texto = styled.p`
  display: block;
  text-align: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  padding-bottom: 40px;
`
export const LinkStyle = styled.a`
  img {
    cursor: pointer;
  }
`
