
import { Hero } from "@/components/About/Hero";
import { Work } from "@/components/About/Work";
import { gentium } from "@/components/Index/Hero";
import { Layout } from "@/components/Layout";
import { PageProvider } from "@/components/PageProvider";
import getDateString from "@/utils/getDateString";
import client from "@/utils/sanity";
import { Flex, Box, Text, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Image, Heading, Button, ButtonGroup, Divider, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const project = await client.fetch(`
        *[_type == "project"]{_key,title,publishedAt,slug,summary,skills,authorAffiliation, "mainImage" : mainImage{alt,caption, asset{_ref}->{url,"blurHash":metadata.blurHash}}} | order(publishedAt desc)
      `);
      setProjects(project);
    };
    fetchProjects();
  }, []);
    console.log(projects)
  return (
    <PageProvider title="My Projects">
         <Flex
      direction="column"
      w="full"
      minH="40vh"
      align="start"
      pt={40}
      pb={20}
      mb={10}
      bg="#479AFB"
      color="white"
      px={{ base: "20px", lg: "100px", xl: "280px" }}
    >
      <Text fontSize={"5xl"} fontWeight={"bold"} color="white">
        MY PROJECTS
      </Text>
      <Text
        className={gentium.className}
        w={{ base: "full", md: "400px" }}
      >
        “Nelson is an Electrical Engineer with a drive to merge Hardware Systems and Artificial Intelligence, exploring domains like Embedded Systems, Robotics, HCI, EdgeAI, and beyond.”
      </Text>
    </Flex>
    <Layout>
    <SimpleGrid spacing={3} columns={{ base: 1, md: 2 , lg: 3}} w="full" mb={10}>
      {projects.map((item) => (
        <Card maxW='sm' key={item._id} cursor="pointer" transition="transform 0.3s ease" _hover={{ transform: "scale(1.02)", "& img": { transform: "scale(1.1)" } }}  onClick={() => window.location.assign(`/projects/${item.slug.current}`)}>
        <CardBody>
        <Box overflow="hidden" rounded="md">
          <Image
            src={item.mainImage.asset.url!}
            alt={item.mainImage.alt}
            borderRadius='lg'
            boxSize="200px"
            objectFit={"cover"}
            w="full"
            transition="transform 0.8s ease" 
          />
          </Box>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{item.title}</Heading>
            <Text>
             {item.summary}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Text fontSize={14}>{getDateString(item.publishedAt)}</Text>
        </CardFooter>
      </Card>
      ))}

    </SimpleGrid>
    </Layout>
    </PageProvider>
  );
}

