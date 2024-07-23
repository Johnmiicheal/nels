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
      h={{ lg: "70vh"}}
      align="center"
      pt={40}
      pb={20}
      px={{ base: "20px", lg: "100px", xl: "280px" }}
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
            px={{ base: "5", lg: 0}}
            fontSize="1.2rem"
          >
            As an aspiring hardware, robotics, and backend engineer passionate
            about merging Hardware Systems and AI, exploring Robotics, HCI, and
            EdgeAI, and deeply committed to{" "}
            <Text color="#479AFB" display="inline">
              reshaping educational reforms
            </Text>{" "}
            and pedagogy, I find inspiration in Christa McAuliffe&apos;s quote,
            &ldquo;I touch the future, I teach&rdquo;, reflecting my dedication
            to{" "}
            <Text color="#479AFB" display="inline">
              teaching and contributing
            </Text>{" "}
            to a better society.
          </Text>
          <Stack spacing={-5} mt={5}>
            <Heading
              fontWeight={"black"}
              fontSize="5xl"
              color="#479AFB"
              textTransform={"uppercase"}
            >
              Nelson Elijah
            </Heading>
            <Text fontSize="24">Robotics. Teaching. Quality education.</Text>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
    </Center>
  );
};
