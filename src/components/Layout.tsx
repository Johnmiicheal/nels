import { Flex } from "@chakra-ui/react"
import React, { ReactNode } from "react"
import { Navigator } from "./Navigator"
import { Header } from "./Header"

interface LayoutProps{
    children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <Flex direction="column" align="center" bg="white" minH="100vh" w="full">
            <Header />
            {children}
            <Navigator />
        </Flex>
    )
}