import {
  Flex,
  Text,
  Button,
  Stack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export const ProjectFooter = ({
  acknowledgements,
  references,
  nextProject,
  previousProject,
}: any) => {
  return (
    <Flex direction="column" w="full" gap={5} fontSize={22} mb={20}>
      <Stack direction="row">
        <Text>
          <strong>Acknowledgements: </strong>
        </Text>
        <Text>{acknowledgements}</Text>
      </Stack>
      <Stack direction="row">
        <Text>
          <strong>References </strong>
        </Text>
        <Text>
          {references && (
            <UnorderedList>
              {references.map((item: any, index: number) => (
                <Stack key={index}>
                  <ListItem key={item.title}>{item.title}</ListItem>
                  <ListItem key={item.title}>{item.title}</ListItem>
                </Stack>
              ))}
            </UnorderedList>
          )}
        </Text>
      </Stack>
      <Flex w="full" justify="space-between">
      {previousProject && (
            <Button colorScheme="blue" variant="outline" size="lg" textAlign={"left"} leftIcon={<IoChevronBack />} onClick={() => window.location.assign(`/projects/${previousProject.slug}`)} >
                {previousProject.title}
            </Button>
        )}
        {nextProject && (
            <Button colorScheme="blue" variant="outline" size="lg" textAlign={"right"} rightIcon={<IoChevronForward />} onClick={() => window.location.assign(`/projects/${nextProject.slug}`)} >
                {nextProject.title}
            </Button>
        )}
      </Flex>
    </Flex>
  );
};
