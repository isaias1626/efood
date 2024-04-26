import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'
import { breakpoints, color } from '../../styles'

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
  display: flex;
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
  color: ${color.yellow};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  overflow-y: auto;
  padding-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
`
export const Title = styled.h3`
  color: ${color.yellow};
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
  padding-left: 8px;
  margin-top: 32px;
`
