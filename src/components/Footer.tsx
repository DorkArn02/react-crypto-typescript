import { Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <Flex p={2} align={"center"} flexDir={"column"}>
            <Text>Cryptocurrencies</Text>
            <Text>All rights reserved</Text>
            <HStack>
                <Link to={"/"}><Text _hover={{ textDecor: 'underline' }}>Home</Text></Link>
                <Link to={"/cryptocurrencies"}><Text _hover={{ textDecor: 'underline' }}>Cryptocurrencies</Text></Link>
                <Link to={"/"}><Text _hover={{ textDecor: 'underline' }}>Exchanges</Text></Link>
                <Link to={"/news"}><Text _hover={{ textDecor: 'underline' }}>News</Text></Link>
            </HStack>
        </Flex>
    )
}
