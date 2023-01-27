import { Flex, Grid, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CryptocurrencyItem from "./CryptocurrencyItem";
import Footer from "./Footer";
import Statistics from "./Statistics";
import { useGetCryptocurrenciesQuery } from "../services/crypto";
import { useState } from "react";

export default function Dashboard() {

  const [simply, setSimply] = useState<boolean>(true)
  const { isFetching, data: cryptos } = useGetCryptocurrenciesQuery(simply ? 10 : 100)

  if (isFetching) return <Text>Loading...</Text>

  return (
    <Flex w={"100%"} flexDir={"column"}>
      <Flex p={5} flexDir={"column"}>
        <Heading fontWeight={"medium"} size={"md"}>Global Crypto Stats</Heading>
        {cryptos ?
          <>
            <Grid p={6} gap={5} templateColumns={['repeat(2,1fr)', 'repeat(3, 1fr)']}>
              <Statistics title="Total Cryptocurrencies" value={cryptos.stats.total} />
              <Statistics title="Total Exchanges" value={cryptos.stats.totalExchanges} />
              <Statistics title="Total Market Cap" value={cryptos.stats.totalMarketCap} />
              <Statistics title="Total 24h Volume" value={cryptos.stats.total24hVolume} />
              <Statistics title="Total Markets" value={cryptos.stats.totalMarkets} />
            </Grid>
            <HStack>
              <Heading fontWeight={"medium"} size={"md"}>Top 10 Cryptocurrencies</Heading>
              <Spacer />
              <Link to={"/"}>
                <Heading onClick={() => setSimply(!simply)} color={"lightblue"} size={"md"} _hover={{ textDecor: 'underline' }}>{simply ? "Show More" : "Show Less"}</Heading>
              </Link>
            </HStack>
            <Grid p={6} gap={5} templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}>
              {cryptos.coins.map((coin, key) => {
                return <CryptocurrencyItem key={key} uuid={coin.uuid} name={coin.name} cap={coin.marketCap} change={coin.change} img={coin.iconUrl} price={coin.price} />
              })}
            </Grid>
          </>
          : ""}
      </Flex>
      <Footer />
    </Flex>
  )
}
