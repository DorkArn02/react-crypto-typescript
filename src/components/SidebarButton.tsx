import { Flex, Text, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { NavLink } from 'react-router-dom'

interface SidebarButtonPropsI {
    label: string,
    icon: IconType,
    href: string
}

export default function SidebarButton({ icon, label, href }: SidebarButtonPropsI) {
    return (
        <NavLink className={({ isActive }) => isActive ? 'activeBtn' : ''} to={href}>
            <Flex p={2} _hover={{ textDecor: 'underline' }} gap={2} align={"center"}>
                <Icon as={icon}></Icon>
                <Text>{label}</Text>
            </Flex>
        </NavLink>
    )
}
