import { PortableText } from "@portabletext/react";
import { customProjectComponents } from "@/utils/customComponent";
import { Box, Flex, Stack, Grid, Divider } from "@chakra-ui/react";
import TableOfContents from "./TableOfContent";

const ProjectBody = ({ body, headings }: any) => {
  return (
    <Stack>
        <Flex w="full" gap={20} direction={{ base: "column", lg: "row" }}>
        <Stack w="full">
            <TableOfContents headings={headings} sx={{ pl: 0 }} />
        </Stack>

        <Stack>
            <PortableText value={body} components={customProjectComponents} />
        </Stack>
        </Flex>
        <Divider my={20} borderColor="gray.300"/>
    </Stack>
  );
};

export default ProjectBody;
