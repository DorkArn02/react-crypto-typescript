import { Flex, Grid, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNews";
import CryptoNewsItem from "./CryptoNewsItem";
import Footer from "./Footer";

export default function CryptoNews() {

    const [simply, setSimply] = useState<boolean>(true)
    const { isFetching, data } = useGetCryptoNewsQuery({ count: simply ? 10 : 100, q: "Cryptocurrency" })

    if (isFetching) return <Text>Loading...</Text>

    return (
        <Flex w={"100%"} flexDir={"column"}>
            <Flex p={5} flexDir={"column"}>
                <HStack>
                    <Heading mb={3} fontWeight={"medium"} size={"md"}>Crypto News</Heading>
                    <Spacer />
                    <Heading onClick={() => setSimply(!simply)} color={"lightblue"} size={"md"} _hover={{ cursor: 'pointer', textDecor: 'underline' }}>{simply ? "Show More" : "Show Less"}</Heading>
                </HStack>
                {data ?
                    <Grid gap={5} templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}>
                        {data.map((item, key) => {
                            return <CryptoNewsItem key={key} {...item} />
                        })}
                    </Grid>
                    : ""}
            </Flex>
            <Footer />
        </Flex>
    )
}
