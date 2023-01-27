import { Flex, Heading } from "@chakra-ui/react"
import { Line } from "react-chartjs-2"
import { CryptoHistoryI } from "../interfaces/interfaces"
import { Chart, registerables } from "chart.js"
import millify from "millify";
import moment from "moment";

Chart.register(...registerables);

interface LineChartPropsI {
    history: Array<CryptoHistoryI>,
    currentPrice: number,
    coinName: string
}


export default function LineChart(props: LineChartPropsI) {

    const coinPrice = []
    const coinTimest = []

    for (let i = 0; i < props.history.length; i++) {
        coinPrice.push(props.history[i].price)
        coinTimest.push(moment.unix(props.history[i].timestamp).format('YYYY/MM/DD hh:mm'))
    }


    const data = {
        labels: coinTimest,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }

    return (
        <Flex w="95%" mb={2} flexDir={"column"}>
            <Heading size={"md"}>{props.coinName} current value: $ {millify(props.currentPrice, { precision: 2 })}</Heading>
            <Line data={data} />
        </Flex>
    )
}
