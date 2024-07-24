import { Flex, Text, Image, Button, IconButton } from "@chakra-ui/react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"


export const Footer = () => {
  return (
    <Flex direction="column" bottom={0} w="full" bg="white">
      <Flex p={5} bg="#C4DFFE" direction={{ base: 'column', md: 'row'}} w="full" gap={2} px={{ base: "20px", lg: "100px", xl: "280px" }} justify={{ md: "space-between"}} pt={40}>
        <Flex direction="column" color="white" gap={4}>
            <Image src="/assets/logofullwhite.svg" alt="nels logo" onClick={() => window.location.assign('/')} w="100px" cursor="pointer" />
            <Text fontSize={18}>{new Date().getFullYear()} Nelson Elijah. All Rights Reserved</Text>
        </Flex>
        <Flex align="center" gap={3}>
                <Button onClick={() => window.open('mailto:nelsonelijah@gmail.com')} textTransform={"uppercase"} border="1px solid #fff" color="#fff" bg="transparent" fontWeight={500} fontSize={14}>Contact Me</Button>
                <IconButton onClick={() => window.open('https://github.com/NelsonElijah')} aria-label="github" icon={<IoLogoGithub />} variant="ghost" color="#fff" />
                <IconButton onClick={() => window.open("https://www.linkedin.com/in/nelson-elijah/")} aria-label="linkedin" icon={<IoLogoLinkedin />} variant="ghost" color="#fff" />
            </Flex>
      </Flex>
    </Flex>
  );
};
