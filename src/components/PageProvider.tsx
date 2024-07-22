import { Flex } from "@chakra-ui/react"
import React, { ReactNode } from "react"
import { Navigator } from "./Navigator"
import { Header } from "./Header"
import { Footer } from "./Footer"

interface PageProviderProps{
    children: ReactNode
}

export const PageProvider: React.FC<PageProviderProps> = ({children}) => {
    return(
        <Flex direction="column" justify="space-between" align="center" bg="#F9F9F9" minH="100vh" w="full">
            <Header />
            {children}
            <Navigator />
            <Footer />
        </Flex>
    )
}