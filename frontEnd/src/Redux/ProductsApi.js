// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5100' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `/products`,

    }),
  }),
})
export const detailsApi = createApi({
  reducerPath: 'detailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5100' }),
  endpoints: (builder) => ({
    getDetailsApi: builder.query({
      query: (name) => `products/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = productsApi
export const { useGetDetailsApiQuery } = detailsApi