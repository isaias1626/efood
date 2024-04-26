import styled from 'styled-components'
import { breakpoints, color } from '../../styles'

export const Card = styled.div`
  background-color: ${color.white};
  border: 1px solid ${color.orange};
  position: relative;
  margin-bottom: 48px;

  > img {
    width: 472px;
    height: 217px;
    max-width: 100%;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.desktop}) {
    img {
      width: 100%;
    }
  }
`
export const CardItens = styled.div`
  padding: 8px 8px;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const Notes = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
`
export const Avaiable = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  p {
    margin-right: 8px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
