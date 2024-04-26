import styled from 'styled-components'
import { breakpoints, color } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${color.orange};
  color: ${color.yellow};
  width: 320px;
  height: auto;
  margin-bottom: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    width: auto;
  }
`

export const Image = styled.div`
  padding: 8px;

  img {
    height: 167px;
    width: 100%;
    max-width: 100%;
    object-fit: cover;
  }
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
  padding: 4px 8px;
  background-color: ${color.yellow};
  color: ${color.orange};
  border: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 12px;
  }

  &:hover {
    background-color: ${color.lightYellow};
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
  background-color: ${color.orange};
  color: ${color.white};
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

  @media (max-width: ${breakpoints.tablet}) {
    display: block;

    h4 {
      margin-top: 16px;
      font-size: 16px;
    }

    p {
      font-size: 12px;
      margin-bottom: 16px;
    }

    img {
      width: 100%;
    }
  }

  ${ButtonContainer} {
    background-color: ${color.yellow};
    padding: 4px 7px;
    width: 228px;
    height: 24px;
    color: ${color.orange};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 59px;
    cursor: pointer;

    &:hover {
      background-color: ${color.white};
    }
  }
`
export const Close = styled.header`
  background-color: ${color.orange};
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
