import { Box, Card, Divider, Flex, Grid, Heading, HStack, Link, Select, Spacer, Text } from "@chakra-ui/react";
import millify from "millify";
import { useParams } from "react-router-dom";
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from "../services/crypto";
import ReactHtmlParser from "react-html-parser"
import { useState } from "react";
import LineChart from "./LineChart";

export default function CryptocurrencyDetails() {

    const { id } = useParams()
    const { data, isFetching } = useGetCryptoDetailsQuery(id || "")
    const [timePeriod, setTimePeriod] = useState<string>('3h')
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']
    const { data: cryptoHistory } = useGetCryptoHistoryQuery({ coinId: id || "", timeperiod: timePeriod })


    if (isFetching) return <Text>Loading...</Text>

    console.log(cryptoHistory)

    return (
        <Flex flexDir={"column"}>
            <Flex p={5} flexDir={"column"}>
                {data ?
                    <>
                        <Heading mb={2} fontWeight={"medium"} size={"md"}>{data.name} ({data.symbol})</Heading>

                        <Grid mb={5} gap={5} templateColumns={"repeat(2, 1fr)"}>
                            <Card p={2}>
                                <Heading size="md">{data.name} Value Price</Heading>
                                <Text>Price To USD: $ {millify(data.price)}</Text>
                                <Text>Rank: Price To USD: $ {millify(data.price)}</Text>
                                <Text>24h Volume: $ {millify(data["24hVolume"])}</Text>
                                <Text>Market Cap: $ {millify(data.marketCap)}</Text>
                                <Text>All-time-high(daily average): $ {millify(data.allTimeHigh.price)}</Text>
                            </Card>
                            <Card p={2}>
                                <Heading size="md">Other Stats</Heading>
                                <Text>Number Of Markets: {millify(data.numberOfMarkets)}</Text>
                                <Text>Number Of Exchanges: {millify(data.numberOfExchanges)}</Text>
                                <Text>Approved Supply:  {data.supply.confirmed ? "Yes" : "No"}</Text>
                                <Text>Total Supply: $ {millify(data.supply.total)}</Text>
                                <Text>Circulating Supply: $ {millify(data.supply.circulating)}</Text>
                            </Card>
                        </Grid>
                        <Select w="30%" onChange={(e) => setTimePeriod(e.target.value)}>
                            {time.map(i => {
                                return <option value={i}>{i}</option>
                            })}
                        </Select>
                        {cryptoHistory ?
                            <LineChart coinName={data.name} currentPrice={data.price} history={cryptoHistory} />
                            : ""}
                        <Box mb={2}>
                            <Heading mb={2} size="md">What is {data.name}</Heading>
                            {ReactHtmlParser(data.description)}
                        </Box>
                        <Box>
                            <Heading mb={2} size="md">{data.name} Links</Heading>
                            <Flex flexDir={"column"}>
                                {data.links.map((link, key) => {
                                    return <HStack key={key} w={"50%"}>
                                        <Text>{link.name}</Text>
                                        <Spacer />
                                        <Link href={link.url}><Text textAlign={"right"}>{link.url}</Text></Link>
                                    </HStack>
                                })}
                            </Flex>
                        </Box>
                    </>
                    : ""}
            </Flex>
        </Flex>
    )
}
