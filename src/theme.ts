import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({
    config, styles: {
        global: {
            "h3": {
                'margin-top': '20px',
                'margin-bottom': '20px',
                'font-weight': 'bold'
            },
            ".activeBtn": {
                'bgColor': '#0099cc',
                'width': '100%'
            }
        },
    },
})

export default theme