import Italiana from '..'
import Category from '../../../../models/Category'

export type Props = {
  categorys: Category[]
}

const ProductListCategory = ({ categorys }: Props) => (
  <div className="container">
    {categorys.map((category) => (
      <Italiana
        key={category.id}
        title={category.title}
        description={category.description}
        image={category.image}
      />
    ))}
  </div>
)

export default ProductListCategory
