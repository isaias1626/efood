import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Header from './components/Header'
import HeaderCategory from './components/HeaderCategory'

const Rotas = () => (
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
      path="/italiana"
      element={
        <>
          <HeaderCategory />
          <Categories />
        </>
      }
    />
  </Routes>
)

export default Rotas
