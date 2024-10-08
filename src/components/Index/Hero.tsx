import { Flex, Text, Image, Heading, Stack, Center } from "@chakra-ui/react";
import { Gentium_Book_Plus } from "next/font/google";

export const gentium = Gentium_Book_Plus({
  style: "italic",
  weight: "400",
  subsets: ["latin"],
});

export const Hero = () => {
  return (
    <Center w="full">
    <Flex
      direction="column"
      bgImg="/assets/nelsbg.png"
      bgSize="cover"
      w="full"
      minH={{ lg: "70vh"}}
      align="center"
      pt={40}
      pb={20}
      px={{ base: "20px", md: "100px", xl: "280px" }}
    >
      <Flex
        align="center"
        gap={10}
        direction={{ base: "column", lg: "row" }}
        color="#747474"
      >
        <Image src="/images/nels.png" alt="nelson" w={{ md: "350px"}} rounded="md" />
        <Flex
          direction="column"
          h="full"
          justify="space-between"
          align={{base: "center", lg: "start"}}
          textAlign={{ base: "center", lg: "left"}}
        >
          <Text
            className={gentium.className}
            w={{ base: "full", md: "500px" }}
            fontSize="1.2rem"
          >
            Learn. {" "}
            <Text color="#479AFB" display="inline">
              Think.
            </Text>{" "}
            Build... {" "} <Text color="#479AFB" display="inline">
              Repeat
            </Text>{" "}
          </Text>
          <Stack spacing={-5} mt={5}>
            <Heading
              fontWeight={"black"}
              fontSize="4xl"
              color="#479AFB"
              textTransform={"uppercase"}
            >
              Nelson Elijah
            </Heading>
            <Text fontSize="24">Engineering. Teaching. Quality education.</Text>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
    </Center>
  );
};
