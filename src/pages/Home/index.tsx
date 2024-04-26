import { useEffect, useState } from 'react'

import { useGetRestaurantQuery } from '../../services/api'
import ProdutctsList from '../../components/ProductsList'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: product } = useGetRestaurantQuery()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return <>{product && <ProdutctsList products={product} />}</>
}

export default Home
