import {
  Flex,
  Icon,
  Text,
  Image,
  Button,
  VStack,
  Badge,
} from "@chakra-ui/react";
import {
  IoColorWandOutline,
  IoCompassOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { gentium } from "./Hero";
import { RiBriefcase4Line, RiGraduationCapLine } from "react-icons/ri";

export const About = () => {
  const skills = ["Python", "C++", "Linux", "KICAD", "Data Analytics"];
  return (
    <Flex
      direction="column"
      w="full"
      h="full"
      align="center"
      mt={10}
      pb={20}
    >
      <Flex
        align={{ base: "center", lg: "start" }}
        direction={{ base: "column", lg: "row" }}
        gap={{ base: "24", lg: 20 }}
        w="full"
        justify={{ lg: "space-between" }}
      >
        <VStack align={{ base: "center", lg: "start" }}>
          <Flex align={"center"} gap={2} fontSize="24" mb={5}>
            <Icon as={IoPersonOutline} color="#479AFB" />
            <Text>About Me</Text>
          </Flex>
          <Text
            className={gentium.className}
            w={{ base: "full", md: "360px" }}
            fontSize="1.0rem"
            mb={2}
          >
            “I am pursuing a career in hardware, systems, and backend
            engineering because I believe anyone can change the world with
            better chips and even better software.”
          </Text>
          <Image
            src="/images/hardware.png"
            rounded="md"
            w={{ md: "400px" }}
            alt="nelson"
          />
          <Text
            w={{ base: "full", md: "580px" }}
            fontWeight={"400"}
            fontSize="1.2rem"
            mb={2}
          >
            I believe anyone can do anything, but only if they are willing to
            toil a great deal in acquiring knowledge and even more importantly,
            applying that knowledge: You can’t escape the struggle, only choose
            it. However, great things start to happen once you grow beyond
            yourself. This realisation allowed me to become the Best Graduating
            Student from Covenant University in 2023.
          </Text>
          <Button variant="link" color="black" onClick={() => window.location.assign('/blog')}>
            Find out more from my Blogs
          </Button>
          <Button variant="link" color="black" onClick={() => window.open('https://cdn.sanity.io/files/wnde8pd5/production/65ca37a8d2f82a040cf85eb65db0a5389693bf26.pdf')}>
            Nelson Elijah&apos;s CV
          </Button>
        </VStack>
        <VStack align={{ base: "center", lg: "start" }} spacing={7}>
          <Flex align={"center"} gap={2} fontSize="24" mb={{ base: 2, lg: 5 }}>
            <Icon as={IoCompassOutline} color="#479AFB" />
            <Text>Quick Facts</Text>
          </Flex>
          <Flex direction="column" px={{ base: 5, lg: 0}} gap={7}>

            
          <Flex align="start" gap={2} direction="column" fontSize="1.2rem">
            <Flex align="center" gap={2}>
              <Icon as={RiGraduationCapLine} color="#7d7d7d" />
              <Text>
                Covenant University,{" "}
                <Text display="inline" fontSize="12" color="#7d7d7d">
                  Graduated August 2023
                </Text>
              </Text>
            </Flex>
            <Text fontSize="12">
              GPA: 4.98/5.0 • BEng Electrical and Electronics Engineering
            </Text>
          </Flex>
          <Flex align="start" gap={2} direction="column">
            <Flex align="center" gap={2}>
              <Icon as={RiBriefcase4Line} color="#7d7d7d" />
              <Text>Systems Engineer, Space in Nigeria</Text>
            </Flex>
            <Text fontSize="12">Lagos, Nigeria • Oct 2023 - Present</Text>
          </Flex>
          <Flex align="start" gap={2}>
            <Icon as={IoColorWandOutline} color="#7d7d7d" />
            {skills.map((item, index) => (
              <Badge key={index} colorScheme={"gray"} fontWeight="400">
                {item}
              </Badge>
            ))}
          </Flex>
          </Flex>
          <Button colorScheme="blue" onClick={() => window.location.assign('/about')}>Learn More</Button>
        </VStack>
      </Flex>
    </Flex>
  );
};
