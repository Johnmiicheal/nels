import { Text, Box, List, ListItem, Link, Divider, UnorderedList } from "@chakra-ui/react";

const getChildrenText = (props: { children: any[]; }) =>
  props.children
    .map((node) => (typeof node === "string" ? node : node.text || ""))
    .join("");

const get = (object: { subheadings: never[]; }, path: any[]) => path.reduce((prev: any, curr: any) => prev[curr], object);
const getObjectPath = (path: any[]) =>
  path.length === 0
    ? path
    : ["subheadings"].concat(path.join(".subheadings.").split("."));

const parseOutline = (headings: { style: string | any[]; subheadings: never[]; }[]) => {
  const outline = { subheadings: [] };
  const path: number[] = [];
  let lastLevel = 0;

  headings?.forEach((heading: { style: string | any[]; subheadings: never[]; }) => {
    const level = Number(heading.style.slice(1));
    heading.subheadings = [];

    if (level < lastLevel) for (let i = lastLevel; i >= level; i--) path.pop();
    else if (level === lastLevel) path.pop();

    const prop = get(outline, getObjectPath(path));
    prop.subheadings.push(heading);
    path.push(prop.subheadings.length - 1);
    lastLevel = level;
  });

  return outline.subheadings;
};

const TableOfContents = ({ headings, sx }: any) => {
  const outline = parseOutline(headings);
  const createTable = (outline: any[]) => {
    return (
          <UnorderedList spacing={2}>
        {outline.map((heading: any) => (
            <ListItem key={heading._key}
              fontSize={22}
              >
              <Link  href={"#" + heading._key}>
              {getChildrenText(heading!)}
            </Link>
            {heading.subheadings.length > 0 && createTable(heading.subheadings)}
            </ListItem>
          ))}
          </UnorderedList>
    );
  };

  return (
    <Box
      alignItems="end"
      pr={2}
      w="full"
      h="full"
      borderRight="1px solid"
      borderRightColor={"gray.300"}
      >
      <Box w="full">
        <Text as="h1" my={[2, 3]} fontSize={{ sm: "2rem" }}>
          Contents
        </Text>
        {createTable(outline)}
      </Box>
    </Box>
  );
};

export default TableOfContents;