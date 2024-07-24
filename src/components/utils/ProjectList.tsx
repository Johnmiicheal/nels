import getDateString from "@/utils/getDateString";
import { Stack, Box, Text, Image, Card, CardBody, CardFooter, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface ProjectListProps {
  slug: { current: string };
  title: string;
  summary: string;
  publishedAt: string;
  authors: string;
  mainImage: {
    asset: { url: string; blurHash: string };
    alt: string;
  };
}

const ProjectListItem: React.FC<ProjectListProps> = ({
  slug,
  title,
  summary,
  publishedAt,
  authors,
  mainImage,
}) => {
  return (
    <Card maxW='sm' cursor="pointer" transition="transform 0.3s ease" _hover={{ transform: "scale(1.02)", "& img": { transform: "scale(1.1)" } }}  onClick={() => window.location.assign(`/projects/${slug.current}`)}>
        <CardBody>
        <Box overflow="hidden" rounded="md">
          <Image
            src={mainImage.asset.url!}
            alt={mainImage.alt}
            borderRadius='lg'
            boxSize="200px"
            objectFit={"cover"}
            w="full"
            transition="transform 0.8s ease" 
          />
          </Box>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Text>
             {summary}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Text fontSize={14}>{getDateString(publishedAt)}</Text>
        </CardFooter>
      </Card>
  );
};

export default ProjectListItem;
