import { Box, Text, Stack, Flex, Divider } from "@chakra-ui/react";
import { PortableText } from "@portabletext/react";
import { customThoughtComponents } from "@/utils/customComponent";
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import { Icon } from "@chakra-ui/react";
import { RiFacebookCircleFill, RiLinkedinBoxFill, RiTwitterXLine } from "react-icons/ri";
import { gentium } from "../Index/Hero";
import { Layout } from "../Layout";


const SinglePost = ({ publishedAt, body, title, slug, summary }: any) => {
  const baseURL = "https://nelsonelijah.com";
  return (
    <Box pb={5}>
         <Flex
      direction="column"
      w="full"
      minH="40vh"
      align="start"
      pt={{ base: 28, lg: 40}}
      pb={20}
      mb={5}
      bg="#479AFB"
      color="white"
      px={{ base: "20px", lg: "100px", xl: "280px" }}
    >
      <Text fontSize={{ base: '3xl', md: "5xl"}} fontWeight={"bold"} color="white">
        {title}
      </Text>
      <Text
        className={gentium.className}
        w={{ base: "full", md: "400px" }}
      >
        “{summary}”
      </Text>
    </Flex>
    <Layout>
        <Stack px={{ lg: "200px"}} fontWeight={400} textAlign={"justify"}>
            <PortableText value={body} components={customThoughtComponents} />
        </Stack>
        <Divider my={4} />
        <Stack direction="row" justifyContent="space-between" w="full" alignItems="center" color="#747474">
            <Text mt={2} fontWeight="400" fontStyle={'italic'}>
            {publishedAt}
            </Text>
            <Stack direction="row" alignItems="center" spacing={2} fontSize={20} >
            <TwitterShareButton url={baseURL + `/blog/${slug}`} title={title}>
                <Icon  as={RiTwitterXLine} />
            </TwitterShareButton>
            <LinkedinShareButton url={baseURL + `/blog/${slug}`}>
                <Icon as={RiLinkedinBoxFill} />
            </LinkedinShareButton>
            <FacebookShareButton url={baseURL + `/blog/${slug}`}>
                <Icon as={RiFacebookCircleFill} />
            </FacebookShareButton>
            </Stack>
        </Stack>
    </Layout>
    </Box>
  );
};

export default SinglePost;