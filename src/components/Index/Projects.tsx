import {
  Flex,
  Icon,
  Badge,
  Text,
  Image,
  Button,
  IconButton,
  Box,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
import { IoLinkOutline, IoLogoGithub } from "react-icons/io5";
import { PiCircuitryLight } from "react-icons/pi";
import client from "@/utils/sanity";
import ProjectListItem from "../utils/ProjectList";
import getDateString from "@/utils/getDateString";
import { useEffect, useState } from "react";

export const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [mobile] = useMediaQuery("(max-width: 1512px)");
  const [items, setItems] = useState(3);

  useEffect(() => {
    const fetchProjects = async () => {
      if(mobile){
        setItems(4)
      }else{
        setItems(3)
      }
      const project = await client.fetch(`
        *[_type == "project"]{_key,title,publishedAt,slug,summary,authorAffiliation, "mainImage" : mainImage{alt,caption, asset{_ref}->{url,"blurHash":metadata.blurHash}}} | order(publishedAt desc)[0..3]
      `);
      setProjects(project);
    };
    if(!projects){
      fetchProjects();
    }
  }, [items, mobile, projects]);
  return (
    <Flex
      direction="column"
      w="full"
      h="full"
      align={{ base: "center", lg: "start" }}
      mt={10}
      pb={20}
    >
      <Flex align={"center"} gap={2} fontSize="24" mb={5}>
        <Icon as={PiCircuitryLight} color="#479AFB" />
        <Text>Projects</Text>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, "2xl": 3 }} spacing="10">
        {projects.slice(0, items)?.map(
          ({
            title,
            authorAffiliation,
            summary,
            _key,
            publishedAt,
            slug,
            mainImage,
          }: any) => {
            return (
              <ProjectListItem
                key={_key}
                title={title}
                authors={"Nelson"}
                summary={summary}
                publishedAt={getDateString(publishedAt)}
                slug={slug}
                mainImage={mainImage}
              />
            );
          }
        )}
      </SimpleGrid>

      <Button
        mt={3}
        variant="link"
        colorScheme="blue"
        onClick={() => window.location.assign("/projects")}
      >
        See more projects
      </Button>
    </Flex>
  );
};
