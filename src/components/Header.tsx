import { Flex, Button, IconButton, Image, Center } from "@chakra-ui/react"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

export const Header = () => {
    return(
        <Center>
            <Flex align="center" justify="space-between" w="full" pos="absolute" top={10} px={{ base: "20px", lg: "100px", xl: "280px" }}>
                <Image src="/assets/logofull.svg" alt="logo" onClick={() => window.location.assign('/')} w="70px" cursor="pointer" />
                <Flex align="center" gap={3}>
                    <Button onClick={() => window.open('mailto:nelsonelijah@gmail.com')} textTransform={"uppercase"} border="1px solid #4f4f4f" color="#4f4f4f" bg="transparent" fontWeight={500} fontSize={14}>Contact Me</Button>
                    <IconButton onClick={() => window.open("https://www.github.com/nelsonifechukwu")}  aria-label="github" icon={<IoLogoGithub />} variant="ghost" color="#4f4f4f" />
                    <IconButton onClick={() => window.open("https://www.linkedin.com/in/nelson-elijah/")}  aria-label="linkedin" icon={<IoLogoLinkedin />} variant="ghost" color="#4f4f4f" />
                </Flex>
            </Flex>
        </Center>
    )
}