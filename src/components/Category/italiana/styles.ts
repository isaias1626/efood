import styled from 'styled-components'
import { cores } from '../../../styles'
import { ButtonContainer } from '../../Button/styles'

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
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalProduct = styled.div`
  background-color: ${cores.laranja};
  color: ${cores.branca};
  display: flex;
  padding: 6px 32px 32px 32px;
  gap: 24px;
  position: relative;
  z-index: 1;

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
    width: 218px;
    height: 24px;
    color: ${cores.laranja};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 59px;
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
