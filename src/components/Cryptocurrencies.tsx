import { Flex, Grid, Heading, Input, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { CryptoCoinI } from '../interfaces/interfaces'
import { useGetCryptocurrenciesQuery } from '../services/crypto'
import CryptocurrencyItem from './CryptocurrencyItem'
import Footer from './Footer'

export default function Cryptocurrencies() {

    const { isFetching, data } = useGetCryptocurrenciesQuery(100)
    const [crypto, setCrypto] = useState<Array<CryptoCoinI> | undefined>(data?.coins)
    const [text, setText] = useState<string>("")

    useEffect(() => {
        setCrypto(data?.coins)
        const filtered = data?.coins.filter(i => i.name.toLowerCase().includes(text.toLowerCase()))
        setCrypto(filtered)
    }, [data, text])

    if (isFetching) return <Text>Loading...</Text>

    return (
        <Flex w={"100%"} flexDir={"column"}>
            <Flex p={5} flexDir={"column"}>
                <Heading mb={3} fontWeight={"medium"} size={"md"}>All cryptocurrencies:</Heading>
                <Input onChange={(e) => setText(e.target.value)} width={"40vw"} type="text" placeholder={"Cryptocurrency's name"} />
                {data && crypto ?
                    <Grid p={6} gap={5} templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}>
                        {crypto.map((coin, key) => {
                            return <CryptocurrencyItem key={key} uuid={coin.uuid} name={coin.name} cap={coin.marketCap} change={coin.change} img={coin.iconUrl} price={coin.price} />
                        })}
                    </Grid>
                    : ""}
            </Flex>
            <Footer />
        </Flex>
    )
}
