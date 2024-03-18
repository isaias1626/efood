import styled from 'styled-components'
import { cores } from '../../../styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  color: ${cores.amarelo};
  width: 320px;
  height: auto;
  margin-bottom: 32px;
`

export const Image = styled.div`
  padding: 8px;
  width: 304px;
`
export const CardItens = styled.div`
  padding: 0 8px;

  h4 {
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 8px;
  }
`
export const Button = styled.button`
  width: 100%;
  margin-bottom: 8px;
  padding: 4px 84px;
  background-color: ${cores.amarelo};
  color: ${cores.laranja};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${cores.amareloClaro};
  }
`
