import { Route, Routes } from 'react-router-dom'

import Home, { Producto } from './pages/Home'
import Categories from './pages/Categories'
import Header from './components/Header'
import HeaderCategoriesConfig from './pages/HeaderCategoriesConfig'
import { useEffect, useState } from 'react'

const Rotas = () => {
  const [produtos, setProdutos] = useState<Producto[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

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
            <HeaderCategoriesConfig products={produtos} />
            <Categories />
          </>
        }
      />
    </Routes>
  )
}

export default Rotas
