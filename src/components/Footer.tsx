import { Flex, Text, Image, Button, IconButton } from "@chakra-ui/react";
import Marquee from "./utils/Marquee";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"


export const Footer = () => {
  return (
    <Flex direction="column" bottom={0} w="full" bg="white">
      <Flex p={5} bg="#C4DFFE" w="full" justify="space-between" align="end" pt={40}>
        <Flex direction="column" color="white" gap={4}>
            <Image src="/assets/logofullwhite.svg" alt="nels logo" w="100px" />
            <Text fontSize={18}>{new Date().getFullYear()} Nelson Elijah. All Rights Reserved</Text>
        </Flex>
        <Flex align="center" gap={3}>
                <Button textTransform={"uppercase"} border="1px solid #fff" color="#fff" bg="transparent" fontWeight={500} fontSize={14}>Contact Me</Button>
                <IconButton aria-label="github" icon={<IoLogoGithub />} variant="ghost" color="#fff" />
                <IconButton aria-label="linkedin" icon={<IoLogoLinkedin />} variant="ghost" color="#fff" />
            </Flex>
      </Flex>
    </Flex>
  );
};
