import { Flex, Text, Image, Heading } from "@chakra-ui/react";
import { Gentium_Book_Plus } from "next/font/google";

export const gentium = Gentium_Book_Plus({
  style: "italic",
  weight: "400",
  subsets: ["latin"],
});

export const Hero = () => {
  return (
    <Flex
      direction="column"
      bgImg="/assets/nelsbg.png"
      bgSize="cover"
      w="full"
      h={{ lg: "70vh"}}
      align="center"
      pt={40}
      pb={20}
    >
      <Flex
        align="center"
        gap={10}
        direction={{ base: "column", lg: "row" }}
        color="#747474"
      >
        <Image src="/images/nels.png" alt="nelson" w="300px" rounded="md" />
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
          <Heading
            fontWeight={"black"}
            fontSize="5xl"
            color="#479AFB"
            textTransform={"uppercase"}
            mb={{ lg: -10 }}
          >
            Nelson Elijah
          </Heading>
          <Text fontSize="24">Robotics. Teaching. Quality education.</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
