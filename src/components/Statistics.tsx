import { Card, Text } from '@chakra-ui/react'
import millify from "millify";

interface StatisticsPropsI {
    title: string,
    value: number
}

export default function Statistics({ title, value }: StatisticsPropsI) {
    return (
        <Card p={2} boxShadow={"md"}>
            <Text fontWeight={"normal"} mb={4}>{title}</Text>
            <Text fontWeight={"bold"}>{millify(value)}</Text>
        </Card>
    )
}
