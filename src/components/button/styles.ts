import styled from 'styled-components'
import { cores } from '../../styles'

import { Link } from 'react-router-dom'

export const ButtonContainer = styled.div`
  font-size: 14px;
  background-color: ${cores.laranja};
  color: ${cores.amarelo};
  padding: 4px 6px;
  font-weight: bold;
`
export const ButtonLink = styled(Link)`
  font-size: 14px;
  background-color: ${cores.laranja};
  color: ${cores.amarelo};
  padding: 4px 6px;
  font-weight: bold;
  text-decoration: none;
`
