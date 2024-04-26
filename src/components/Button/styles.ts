import styled from 'styled-components'
import { breakpoints, color } from '../../styles'

import { Link } from 'react-router-dom'

export const ButtonContainer = styled.div`
  font-size: 14px;
  background-color: ${color.orange};
  color: ${color.yellow};
  padding: 4px 6px;
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-bottom: 24px;
    background-color: ${color.yellow};
    color: ${color.orange};
    text-align: center;
    padding: 4px 6px;
    cursor: pointer;

    &:hover {
      background-color: ${color.white};
    }
  }
`
export const ButtonLink = styled(Link)`
  font-size: 14px;
  background-color: ${color.orange};
  color: ${color.yellow};
  padding: 4px 6px;
  font-weight: bold;
  text-decoration: none;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 4px 6px;
    font-size: 18px;
  }
`
