import { Container, Stack, Box, Text, Grid, Link, Flex, Image, Divider } from "@chakra-ui/react";
import getDateString from "@/utils/getDateString";

const ProjectHeader = ({
  title,
  summary,
  publishedAt,
  links,
  contributors,
  skills,
  mainImage
}: any) => {
  return (
    <Flex direction="column" w="full" mt={40}>
        <Flex gap={10} align="start" direction={{ base: "column", lg: "row"}}>
            <Image src={mainImage?.asset.url} alt={title} objectFit={"cover"} h="200px" w={{ w: "full", lg: "200px"}} rounded="10px" />
            <Stack>
                <Text fontSize="5xl" fontWeight={'700'}>{title}</Text>
                <Text color="#747474">{summary}</Text>
            </Stack>
        </Flex>
        <Divider my={5} borderColor="gray.300" />
        <Flex direction={{ base: "column", lg: "row"}} w="full" justify={"space-between"} gap={5}>
            <Stack>
                <Text textTransform={"uppercase"} fontWeight={600}>
                    CONTRIBUTORS
                </Text>
                    <Text fontWeight={400}>
                        {contributors}
                    </Text>
            </Stack>
            <Stack align="start">
                <Text textTransform={"uppercase"} fontWeight={600}>
                    Skills
                </Text>
                    {skills?.map((skill: any) => (
                        <Text key={skill}>{skill}</Text>
                    ))}
            </Stack>
            <Stack >
                <Text textTransform={"uppercase"} fontWeight={600}>
                    Published
                </Text>
                    <Text fontWeight={400}>
                        {getDateString(publishedAt)}
                    </Text>
            </Stack>
            <Stack>
                <Text textTransform={"uppercase"} fontWeight={600}>
                    important links
                </Text>
                {links?.map((item: any) => (
                    <Link key={item.title} href={item.url} target="_blank">{item.title}</Link>
                ))}
            </Stack>

        </Flex>
        <Divider my={5} borderColor="gray.300" />

     
    </Flex>
  );
};

export default ProjectHeader;