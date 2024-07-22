import { Stack, Box, Text, Image } from "@chakra-ui/react";
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
    <Stack
      py={2}
      mb={1}
      bg="white"
      overflow="hidden"
      rounded="md"
      p={2}
      cursor="pointer"
      _hover={{ "& img": { transform: "scale(1.1)" } }}
    >
      <Link href={`/project/${slug.current}`}>
        {mainImage && (
          <Box overflow="hidden" rounded="md">
            <Image
              src={mainImage?.asset.url}
              alt={mainImage?.alt || "project_image"}
              objectFit={"cover"}
              boxSize="200px"
              w="full"
              rounded="md"
              transition="transform 0.3s ease"
            />
          </Box>
        )}
        <Text variant="h2" fontSize={{ sm: "2rem" }}>
          {title}
        </Text>
        <Text
          w={{ base: "200px", xl: "300px" }}
          fontSize={"0.8em"}
          h="60px"
          noOfLines={{ base: 1, lg: 2 }}
        >
          {summary}
        </Text>

        <Text variant="body1" color="#999" fontSize="13">
          {publishedAt}
        </Text>
      </Link>
    </Stack>
  );
};

export default ProjectListItem;
