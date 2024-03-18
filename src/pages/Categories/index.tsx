import ProductListCategory from '../../components/Category/italiana/ProductListCategory'
import Category from '../../models/Category'

const Italiana: Category[] = [
  {
    id: 1,
    title: 'hioki',
    description: 'descriçao',
    image: 'https://placehold.it/270x270'
  }
]

const Categories = () => (
  <>
    <ProductListCategory categorys={Italiana} />
  </>
)

export default Categories
