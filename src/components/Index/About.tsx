import { Flex, Icon, Text, Image, Button, VStack } from "@chakra-ui/react";
import { IoCompassOutline, IoPersonOutline } from "react-icons/io5";
import { gentium } from "./Hero";

export const About = () => {
  return (
    <Flex
      direction="column"
      bg="white"
      w="full"
      h="100vh"
      align="center"
      pt={20}
      px={{ base: "20px", lg: "200px" }}
    >
      <Flex
        align="start"
        direction={{ base: "column", lg: "row" }}
        w="full"
        justify={{ lg: "space-between" }}
      >
        <VStack align="start">
          <Flex align={"center"} gap={2} fontSize="24" mb={5}>
            <Icon as={IoPersonOutline} color="#479AFB" />
            <Text>About Me</Text>
          </Flex>
          <Text
            className={gentium.className}
            w={{ base: "full", md: "360px" }}
            px={{ base: "5", lg: 0 }}
            fontSize="14"
            mb={2}
          >
            “I am pursuing a career in hardware, systems, and backend
            engineering because I believe anyone can change the world with
            better chips and even better software.”
          </Text>
          <Image src="/images/hardware.png" rounded="md" w="55%" alt="nelson" />
          <Text
            w={{ base: "full", md: "460px" }}
            px={{ base: "5", lg: 0 }}
            fontWeight={"thin"}
            fontSize="16"
            mb={2}
          >
            I believe anyone can do anything, but only if they are willing to
            toil a great deal in acquiring knowledge and even more importantly,
            applying that knowledge: You can’t escape the struggle, only choose
            it. However, great things start to happen once you grow beyond
            yourself. This realisation allowed me to become the Best Graduating
            Student from Covenant University in 2023.
          </Text>
          <Button variant="link" color="black">
            Find out more from my Blogs
          </Button>
          <Button variant="link" color="black">
            Nelson Elijah&apos;s CV
          </Button>
        </VStack>
        <VStack align="start">
        <Flex align={"center"} gap={2} fontSize="24" mb={5}>
            <Icon as={IoCompassOutline} color="#479AFB" />
            <Text>Quick Facts</Text>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
};
