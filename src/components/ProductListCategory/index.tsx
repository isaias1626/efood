import Italiana from '../Category/italiana'
import Category from '../../models/Category'
import { List } from './styles'

export type Props = {
  categorys: Category[]
}

const ProductListCategory = ({ categorys }: Props) => (
  <div className="container">
    <List>
      {categorys.map((category) => (
        <Italiana
          key={category.id}
          title={category.title}
          description={category.description}
          image={category.image}
        />
      ))}
    </List>
  </div>
)

export default ProductListCategory
