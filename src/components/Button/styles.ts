import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

import { Link } from 'react-router-dom'

export const ButtonContainer = styled.div`
  font-size: 14px;
  background-color: ${cores.laranja};
  color: ${cores.amarelo};
  padding: 4px 6px;
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-bottom: 24px;
    background-color: ${cores.amarelo};
    color: ${cores.laranja};
    text-align: center;
    padding: 4px 6px;
    cursor: pointer;

    &:hover {
      background-color: ${cores.branca};
    }
  }
`
export const ButtonLink = styled(Link)`
  font-size: 14px;
  background-color: ${cores.laranja};
  color: ${cores.amarelo};
  padding: 4px 6px;
  font-weight: bold;
  text-decoration: none;
`
