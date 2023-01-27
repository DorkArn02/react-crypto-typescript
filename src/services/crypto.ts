import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CryptoCoinDetailsI, CryptoHistoryI, CryptoResultI } from '../interfaces/interfaces'

const headers = {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const BASE_URL = "https://coinranking1.p.rapidapi.com"


export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getCryptocurrencies: builder.query<CryptoResultI, number>({
            query: (count) => ({ url: `/coins?limit=${count}`, headers }),
            transformResponse: (
                response: { data: CryptoResultI },
            ) => response.data
        }),
        getCryptoDetails: builder.query<CryptoCoinDetailsI, string>({
            query: (coinId) => ({ url: `/coin/${coinId}`, headers }),
            transformResponse: (
                response: { data: { coin: CryptoCoinDetailsI } },
            ) => response.data.coin
        }),
        getCryptoHistory: builder.query<CryptoHistoryI[], { coinId: string, timeperiod: string }>({
            query: ({ coinId, timeperiod }) => ({ url: `/coin/${coinId}/history?timePeriod=${timeperiod}`, headers }),
            transformResponse: (
                response: { data: { history: CryptoHistoryI[] } },
            ) => response.data.history
        })
    })
})

export const {
    useGetCryptocurrenciesQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi