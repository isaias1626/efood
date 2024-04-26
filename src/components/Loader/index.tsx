import { PropagateLoader } from 'react-spinners'

import { color } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <PropagateLoader color={color.orange} />
  </Container>
)

export default Loader
