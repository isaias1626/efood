import { Card, Image, CardItens, Button } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Italiana = ({ title, description, image }: Props) => (
  <div className="container">
    <Card>
      <Image>
        <img src={image} alt="s" />
      </Image>
      <CardItens>
        <h4>{title}</h4>
        <p>{description}</p>
        <Button>Adcionar ao carrinho</Button>
      </CardItens>
    </Card>
  </div>
)

export default Italiana
