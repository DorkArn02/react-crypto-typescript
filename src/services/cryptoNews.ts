import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CryptoNewsResultI } from '../interfaces/interfaces'

const headers = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const BASE_URL = "https://bing-news-search1.p.rapidapi.com"


export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query<CryptoNewsResultI[], { q: string, count: number }>({
            query: ({ q, count }) => ({ url: `/news/search?q=${q}&count=${count}`, headers }),
            transformResponse: (
                response: { value: CryptoNewsResultI[] },
            ) => response.value
        })
    })
})

export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi