import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaCoins, FaHome, FaNewspaper } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import SidebarButton from "./SidebarButton";

const buttons = [
    { label: 'Home', icon: FaHome, href: "/" },
    { label: 'Cryptocurrencies', icon: FaCoins, href: "/cryptocurrencies" },
    { label: 'News', icon: FaNewspaper, href: "/news" },
]

export default function Sidebar() {

    const [activeMenu, setActiveMenu] = useState<boolean>(true)
    const [screenSize, setScreenSize] = useState<number>(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])

    return (
        <Flex flexDir={activeMenu ? "row" : "column"}>
            {activeMenu ?
                <Flex flexDir={"column"} boxShadow={"lg"} justify={"left"} align={"left"} minH={"100vh"} p={6}>
                    <Heading fontWeight={"medium"} textAlign={"center"} mb={5} size={"md"} > CryptoApp</Heading >
                    <Flex flexDir={"column"} gap={6}>
                        {buttons.map((btn, key) => {
                            return <SidebarButton key={key} href={btn.href} icon={btn.icon} label={btn.label} />
                        })}
                    </Flex>
                </Flex >
                : <Flex p={1} boxShadow={"lg"} flexDir={"column"}>
                    <Heading fontWeight={"medium"} textAlign={"center"} mb={5} size={"md"} > CryptoApp</Heading >
                    {buttons.map((btn, key) => {
                        return <SidebarButton key={key} href={btn.href} icon={btn.icon} label={btn.label} />
                    })}
                </Flex>
            }
            <Outlet />
        </Flex>
    )
}
