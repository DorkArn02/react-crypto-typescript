export interface CryptoResultI {
    coins: Array<CryptoCoinI>
    stats: {
        total: number,
        totalCoins: number,
        totalMarkets: number,
        totalExchanges: number,
        totalMarketCap: number,
        total24hVolume: number
    }
}

export interface CryptoCoinI {
    uuid: string,
    symbol: string,
    name: string,
    color: string,
    iconUrl: string,
    marketCap: number,
    price: number,
    listedAt: number,
    tier: number,
    change: number,
    rank: number,
    sparkline: Array<Number>,
    lowVolume: boolean,
    coinrankingUrl: string,
    '24hVolume': number,
    btcPrice: number
}

export interface CryptoCoinDetailsI {
    uuid: string
    symbol: string
    name: string
    description: string
    color: string
    iconUrl: string
    websiteUrl: string
    links: [
        {
            name: string
            url: string
        }
    ],
    supply: {
        confirmed: boolean
        supplyAt: number
        max: string
        total: number
        circulating: number
    }
    numberOfMarkets: number
    numberOfExchanges: number
    "24hVolume": number
    marketCap: number
    fullyDilutedMarketCap: string
    price: number
    btcPrice: string
    priceAt: number
    change: string
    rank: number
    sparkline: string[]
    allTimeHigh: {
        price: number
        timestamp: number
    }
    coinrankingUrl: string
    tier: number
    lowVolume: boolean
    listedAt: number
    notices: any
    tags: string[]
}


export interface CryptoNewsResultI {
    name: string,
    url: string,
    description: string,
    image: {
        thumbnail: {
            contentUrl: string
        }
    },
    datePublished: string,
    category: string,
    provider: [
        {
            name: string,
            image: {
                thumbnail: {
                    contentUrl: string
                }
            }
        }
    ]
}

export interface CryptoHistoryI {
    price: number,
    timestamp: number
}