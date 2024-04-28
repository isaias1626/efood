import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Header from './components/Header'
import HeaderCategoriesConfig from './pages/HeaderCategoriesConfig'
import { useGetRestaurantQuery } from './services/api'
import Checkout from './pages/Checkout'

const Rotas = () => {
  const { data: product } = useGetRestaurantQuery()

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path="/categories/:id"
        element={
          <>
            <HeaderCategoriesConfig products={product} />
            <Categories />
          </>
        }
      />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}

export default Rotas
