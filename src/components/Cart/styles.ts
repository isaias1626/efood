import styled from 'styled-components'
import { breakpoints, color } from '../../styles'
import { ButtonContainer } from '../Button/styles'

import lixeira from '../../Assets/image/lixeira-de-reciclagem_1.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  ${ButtonContainer} {
    background-color: ${color.yellow};
    color: ${color.orange};
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
  }
`
export const Sidebar = styled.aside`
  background-color: ${color.orange};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  overflow-y: auto;
  padding-bottom: 40px;

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${color.yellow};
    text-align: center;
    padding: 8px;
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 300px;
  }
`
export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${color.yellow};
  margin-top: 40px;
  margin-bottom: 16px;

  > p {
    font-size: 14px;
    font-weight: 700;
  }
`
export const CartItem = styled.li`
  background-color: ${color.yellow};
  display: flex;
  padding: 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
  }

  button {
    background-image: url(${lixeira});
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    transition: transform 0.3s, width 0.3s;

    &:hover {
      transform: scale(1.4) rotate(7deg);
    }
  }
`
export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 24px;
`
