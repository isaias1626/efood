import { useGetRestaurantQuery } from '../../services/api'
import ProductListCategory from '../../components/ProductListCategory'

const Categories = () => {
  const { data: product } = useGetRestaurantQuery()

  if (!product) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <ProductListCategory />
    </>
  )
}

export default Categories
