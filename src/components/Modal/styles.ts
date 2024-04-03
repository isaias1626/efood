import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const ModalProduct = styled.div`
  background-color: ${cores.laranja};
  color: ${cores.branca};
  display: flex;
  padding: 6px 32px 32px 32px;
  gap: 24px;
  position: relative;
  z-index: 1;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    margin-bottom: 16px;
  }

  ${ButtonContainer} {
    background-color: ${cores.amarelo};
    padding: 4px 7px;
    width: 228px;
    height: 24px;
    color: ${cores.laranja};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 59px;
    cursor: pointer;

    &:hover {
      background-color: ${cores.branca};
    }
  }
`
export const Close = styled.header`
  background-color: ${cores.laranja};
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 8px;
  margin: 0;
  position: relative;
  z-index: 1;

  img {
    cursor: pointer;
    width: 16px;
    height: 16px;
    max-width: 100%;
  }
`
