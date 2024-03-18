import Game from '../../models/Game'
import Product from '../Product'
import { List, Container } from './styles'

export type Props = {
  games: Game[]
}

const ProdutctsList = ({ games }: Props) => (
  <Container>
    <div className="container">
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            description={game.description}
            image={game.image}
            infos={game.infos}
            category={game.category}
            avaliation={game.avaliation}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProdutctsList
