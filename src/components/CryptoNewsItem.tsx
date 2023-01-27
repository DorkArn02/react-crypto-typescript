import { Avatar, Card, CardBody, CardFooter, CardHeader, Heading, HStack, Image, Link, Spacer, Text } from '@chakra-ui/react'
import { CryptoNewsResultI } from '../interfaces/interfaces'
import moment from "moment"

export default function CryptoNewsItem({ name, category, datePublished, description, image, url, provider }: CryptoNewsResultI) {
    return (
        <Card>
            <CardHeader>
                <HStack align={"flex-start"}>
                    <Link target={"_blank"} href={url}>
                        <Heading mb={3} size="md">{name.substring(0, 40)}...</Heading>
                    </Link>
                    <Image margin="0px auto" width="100px" objectFit={"contain"} src={image?.thumbnail.contentUrl || "https://cdn.corporatefinanceinstitute.com/assets/cryptocurrency.jpg"} />
                </HStack>
            </CardHeader>
            <CardBody>
                <Text>
                    <Text>{description.substring(0, 100)}...</Text>
                </Text>
            </CardBody>
            <CardFooter>
                <HStack w="100%">
                    <Avatar src={provider[0].image?.thumbnail.contentUrl} />
                    <Text>{provider[0].name}</Text>
                    <Spacer />
                    <Text>{moment(datePublished).fromNow()}</Text>
                </HStack>
            </CardFooter>

        </Card>
    )
}
