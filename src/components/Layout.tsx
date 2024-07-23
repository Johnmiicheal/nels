import { Center, Flex } from "@chakra-ui/react"
import React, { ReactNode } from "react"
import { Navigator } from "./Navigator"
import { Header } from "./Header"
import { Footer } from "./Footer"

interface LayoutProps{
    children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <Center px={{ base: "20px", lg: "100px", xl: "280px" }}>
            <Flex direction="column" align="center" bg="#F9F9F9" w="full" >
                {children}
            </Flex>
        </Center>
    )
}