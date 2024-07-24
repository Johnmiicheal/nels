import {
    Flex,
    Icon,
    Text,
    Image,
    Button,
    VStack,
    Box,
  } from "@chakra-ui/react";
  import {
      IoBookOutline,
  } from "react-icons/io5";
  import { gentium } from "./Hero";
  import { RiBriefcase4Line, RiGraduationCapLine } from "react-icons/ri";
  import { PiPencilLine } from "react-icons/pi";
import { useEffect, useState } from "react";
import client from "@/utils/sanity";
import BlogListItem from "../utils/BlogList";
import getDateString from "@/utils/getDateString";
import Marquee from "../utils/Marquee";

  
  export const Articles = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const images = ["/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png", ]
    const mrqRight = ["HARDWARE.", "LINUX.", "WRITING.", "READING.", "ELECTRONICS.", "PHYSICS.", "NELSON.", "ELIJAH."]

    useEffect(() => {
      const fetchPosts = async () => {
        const post = await client.fetch(
          `*[_type == "post" && hidden != true]{_id,publishedAt,slug,title,summary} | order(publishedAt desc)[0..2]`
        );
        setPosts(post);
      };
      fetchPosts();
    }, []);
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
          gap={{ base: "24", lg: 0 }}
          w="full"
          justify={{ lg: "space-between" }}
        >
          <VStack align={{ base: "center", lg: "start" }} pr={4}>
            <Flex align={"center"} gap={2} fontSize="24" mb={5}>
              <Icon as={PiPencilLine} color="#479AFB" />
              <Text>Latest Articles</Text>
            </Flex>
            {posts.map(({ _id, publishedAt, title, slug, summary }) => (
              <BlogListItem key={_id}
              date={getDateString(publishedAt)}
              title={title}
              summary={summary}
              slug={slug.current} />
            ))}
           
            <Button variant="link" colorScheme="blue" onClick={() => window.location.assign('/blog')}>
              Read more articles
            </Button>
          </VStack>
          <VStack align={{ base: "center", lg: "start" }} spacing={7}>
            <Flex align={"center"} gap={2} fontSize="24" mb={{ base: 2, lg: 5 }}>
              <Icon as={IoBookOutline} color="#479AFB" />
              <Text>My Reading List</Text>
            </Flex>
            <Flex
                  border="1px solid #e2e2e2"
                  borderRadius="md"
                  w={{ lg: "full" }}
                  gap={2}
                  overflow="hidden"
                  direction="column"
                >
                    <Flex h="10em" mt={-20} gap={2}>
                      {images.map((p) => (
                        <Image
                          src={p}
                          w="50%"
                          h="100%"
                          key={p}
                          alt="my book list"
                        />
                      ))}
                    </Flex>

                    <Flex h="10em" gap={2} >
                      {images.reverse().map((p) => (
                        <Image
                        key={p}
                          src={p}
                          w="50%"
                          h="100%"
                          alt="my book list"
                        />
                      ))}
                    </Flex>
                    
                  <Box px={5} pt={2} pb={5} bg={"white"} mt={-20} zIndex="2">
                   I enjoy reading books. - Nelson Elijah, 2024
                  </Box>
                </Flex>
            <Button colorScheme="blue" onClick={() => window.location.assign('/books')}>Learn More</Button>
          </VStack>
        </Flex>
      </Flex>
    );
  };
  