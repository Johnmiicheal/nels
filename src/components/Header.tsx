import { Flex, Button, IconButton, Image } from "@chakra-ui/react"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

export const Header = () => {
    return(
        <Flex align="center" justify="space-between" w="full" pos="fixed" top={10} px={{ base: "20px", lg: "200px"}}>
            <Image src="/assets/logofull.svg" alt="logo" w="70px" pointerEvents="none" />
            <Flex align="center" gap={3}>
                <Button textTransform={"uppercase"} border="1px solid #4f4f4f" color="#4f4f4f" bg="transparent" fontWeight={500} fontSize={14}>Contact Me</Button>
                <IconButton aria-label="github" icon={<IoLogoGithub />} variant="ghost" color="#4f4f4f" />
                <IconButton aria-label="linkedin" icon={<IoLogoLinkedin />} variant="ghost" color="#4f4f4f" />
            </Flex>
        </Flex>
    )
}