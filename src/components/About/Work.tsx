import { workXP } from "@/utils/fakedata";
import {
  Flex,
  Image,
  Text,
  Icon,
  Badge,
  Button,
  Stack,
} from "@chakra-ui/react";
import { IoBriefcaseOutline } from "react-icons/io5";

export const Work = () => {
  return (
    <Flex
      gap={10}
      direction="column"
      bg="#C4DFFE"
      pt={20}
      mt={40}
      pb={20}
      px={{ base: "20px", md: "100px", xl: "280px" }}
      fontSize="1.4rem"
    >
      <Flex align="center" gap={2}>
        <Icon as={IoBriefcaseOutline} fontSize={20} color="#479AFB" />
        <Text fontWeight={"semibold"} fontSize={"2xl"}>
          Work Experience
        </Text>
      </Flex>

      {workXP.map((item, index) => (
        <Flex align="start" gap={4} key={index}>
          <Image
            bg="white"
            p={1}
            src={item.xpImage}
            w="50px"
            rounded="5px"
            alt={item.xpName}
          />
          <Stack spacing={1}>
            <Text fontWeight={500}>
              {item.xpPos}, {item.xpName}
            </Text>
            <Text fontSize={15} color="#747474">
              {item.xpLocation} ∙ {item.xpTimeline}{" "}
            </Text>
            <Text mt={2} color="#000" fontSize="1.1rem" fontWeight={"300"}>
              {item.xpDescription}
            </Text>
          </Stack>
        </Flex>
      ))}
    </Flex>
  );
};
