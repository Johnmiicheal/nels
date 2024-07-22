import { ed, skills, volXP, workXP } from "@/utils/fakedata";
import {
  Flex,
  Image,
  Text,
  Icon,
  Badge,
  Button,
  Stack,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { PiGraduationCap } from "react-icons/pi";
import { Layout } from "../Layout";
import { IoColorWandOutline, IoHeartCircleOutline } from "react-icons/io5";

export const Education = () => {
  return (
    <Layout>
 <Flex
      gap={10}
      direction="column"
      pt={20}
      pb={20}
      w="full"
    >
      <Flex align="center" gap={2}>
        <Icon as={PiGraduationCap} fontSize={20} color="#479AFB" />
        <Text fontWeight={"semibold"} fontSize={"2xl"}>
          Education
        </Text>
      </Flex>

      {ed.map((item, index) => (
        <Flex align="start" gap={4} key={index}>
          <Image
            bg="white"
            p={1}
            src={item.edImage}
            w="50px"
            rounded="5px"
            alt={item.edName}
          />
          <Stack spacing={1}>
            <Text fontWeight={500}>
              {item.edName}, <Text color="#747474" display={"inline"} fontWeight={300} fontSize={13}>{item.edTimeline}</Text>
            </Text>
            <Text fontSize={12}>
              {item.edGrade} ∙ {item.edProgram}{" "}
            </Text>
            <Text mt={2} color="#4f4f4f" fontSize="13" fontWeight={"300"}>
              <UnorderedList spacing={1}>
                {item.edList.map((item) => (
                    <ListItem key={item}>{item}</ListItem>
                ))}
              </UnorderedList>
            </Text>
          </Stack>
        </Flex>
      ))}
    </Flex>

    <Flex
      gap={10}
      direction="column"
      pt={20}
      pb={20}
      w="full"
    >
      <Flex align="center" gap={2}>
        <Icon as={IoColorWandOutline} fontSize={20} color="#479AFB" />
        <Text fontWeight={"semibold"} fontSize={"2xl"}>
          Skills
        </Text>
      </Flex>

     {skills.map((item, index) => (
        <Stack key={index}>
        <Text fontSize={"xl"} fontWeight={'500'}>{item.skType}</Text>
        <UnorderedList>
            {item.skList.map((item) => (
                <ListItem key={item}>
                    {item}
                </ListItem>
            ))}
        </UnorderedList>
        </Stack>
     ))}
    </Flex>
    <Flex
      gap={10}
      direction="column"
      pt={20}
      pb={20}
    >
      <Flex align="center" gap={2}>
        <Icon as={IoHeartCircleOutline} fontSize={20} color="#479AFB" />
        <Text fontWeight={"semibold"} fontSize={"2xl"}>
          Volunteering Services
        </Text>
      </Flex>

      {volXP.map((item, index) => (
        <Flex align="start" gap={4} key={index}>
          <Image
            bg="white"
            p={1}
            src={item.volImage}
            w="50px"
            rounded="5px"
            alt={item.volName}
          />
          <Stack spacing={1}>
            <Text fontWeight={500}>
              {item.volPos}, {item.volName}
            </Text>
            <Text fontSize={12}>
              {item.volTimeline}
            </Text>
            <Text mt={2} color="#4f4f4f" fontSize="13" fontWeight={"300"}>
              {item.volDescription}
            </Text>
          </Stack>
        </Flex>
      ))}
    </Flex>
    </Layout>
   
  );
};
