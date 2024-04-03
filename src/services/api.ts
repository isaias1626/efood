import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Producto } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Producto[], void>({
      query: () => 'restaurantes'
    }),
    getProduct: builder.query<Producto, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantQuery, useGetProductQuery } = api

export default api
