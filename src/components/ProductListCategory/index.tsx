import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Category from '../Category'
import { useGetProductQuery } from '../../services/api'
import Loader from '../Loader'

import * as S from './styles'

type ProductParams = {
  id: string
}

const ProductListCategory = () => {
  const { id } = useParams() as ProductParams
  const { data: product } = useGetProductQuery(id)
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

  if (!product) {
    return <h3>Produto não encontrado.</h3>
  }

  return (
    <div className="container">
      <S.List>
        <Category products={product} />
      </S.List>
    </div>
  )
}

export default ProductListCategory
