import { Card, CardBody, CardHeader, Divider, HStack, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import millify from "millify"
import { Link } from 'react-router-dom'

interface CryptocurrencyItemPropsI {
    uuid: string,
    name: string,
    img: string,
    price: number,
    cap: number,
    change: number
}

export default function CryptocurrencyItem({ uuid, name, img, price, cap, change }: CryptocurrencyItemPropsI) {
    return (
        <Link to={`/coin/${uuid}`}>
            <Card _hover={{ boxShadow: 'lg', cursor: 'pointer' }}>
                <CardHeader flexDir={"row"}>
                    <HStack>
                        <Text>{name}</Text>
                        <Spacer />
                        <Image maxW={"30px"} src={img} />
                    </HStack>
                </CardHeader>
                <Divider />
                <CardBody p={6}>
                    <Text>Price: ${millify(price, { precision: 2 })}</Text>
                    <Text>Market Cap: ${millify(cap, { precision: 2 })}</Text>
                    <Text>Daily Change: {millify(change)}%</Text>
                </CardBody>
            </Card>
        </Link>
    )
}
