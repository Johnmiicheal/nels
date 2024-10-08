import { Center, Flex, Text } from "@chakra-ui/react";
import { gentium } from "../Index/Hero";

export const Hero = () => {
  return (
    <Center w="full">
        <Flex
        direction="column"
        w="full"
        minH="40vh"
        align="start"
        pt={40}
        pb={20}
        bg="#479AFB"
        color="white"
        px={{ base: "20px", md: "100px", xl: "280px" }}
        >
        <Text fontSize={"5xl"} fontWeight={"bold"} color="white">
            ABOUT ME
        </Text>
        <Text
            className={gentium.className}
            w={{ base: "full", md: "400px" }}
        >
            “I am pursuing a career in hardware, systems, and backend
            engineering because I believe anyone can change the world with better
            chips and even better software.”
        </Text>
        </Flex>
    </Center>
  );
};
