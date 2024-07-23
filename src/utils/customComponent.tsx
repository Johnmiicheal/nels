import { Box, Button, OrderedList, Text, UnorderedList, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { IoArrowForward } from "react-icons/io5";
import { RxOpenInNewWindow } from "react-icons/rx";



const defaultComponents = {
  types: {
    image: ({ value }: any) => (
      <Box width="full" my={4}>
        <Flex
          width="80%"
          position="relative"
          margin="0 auto"
          sx={{
            aspectRatio: `${value?.asset.dimensions.width}/${value?.asset.dimensions.height}`,
          }}>
          <Image
            src={value?.asset.url}
            alt={value?.alt || "decorative"}
            placeholder="blur"
            blurDataURL={value?.asset.blurHash}
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </Flex>
        <Text  textAlign="center">
          {value?.caption}
        </Text>
      </Box>
    ),
    code: ({ value }: any) => (
      <Box mb={3}>
        <SyntaxHighlighter language={value?.language} wrapLongLines="true">
          {value?.code}
        </SyntaxHighlighter>
      </Box>
    ),
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <UnorderedList fontSize="1.2rem" lineHeight={"2rem"} spacing={2}>
        {children}
      </UnorderedList>
    ),
    number: ({ children }: any) => (
      <OrderedList fontSize="1.2rem" lineHeight={"2rem"} spacing={2}>
      {children}
    </OrderedList>
    ),
  },

  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }: any) => (
      <Text
        sx={{ fontSize: "16", lineHeight: "1.7rem", mb: { xs: 0, md: 1 } }}>
        {children}
      </Text>
    ),
    blockquote: ({ children }: any) => (
      <Box
        width={{ sm: "80%" }}
        sx={{ borderLeft: "2px solid #EDEDE7" }}
        pl={2}
        my={4}>
        <Text
          as="blockquote"
          sx={{
            fontSize: "1.2rem",
            lineHeight: "2rem",
            backgroundColor: "#E8F0F8",
            display: "inline",
          }}>
          {children}
        </Text>
      </Box>
    ),
    h1: ({ children, value }: any) => (
      <Text id={`${value._key}`} as="h1" my={4}>
        {children}
      </Text>
    ),
    h2: ({ children, value }: any) => (
      <Text id={`${value._key}`} as="h2" my={3}>
        {children}
      </Text>
    ),
    h3: ({ children, value }: any) => (
      <Text id={`${value._key}`} as="h3" my={3}>
        {children}
      </Text>
    ),
    h4: ({ children, value }: any) => (
      <Text id={`${value._key}`} as="h4" my={3}>
        {children}
      </Text>
    ),
  },

  marks: {
    internalLink: ({ value, children }: any) => {
      console.log(children[0]);
      const href = `/${
        value?.info._type == "post" ? "blog" : value?.info._type
      }/${value?.info.slug.current}`;
      return (
        <Button
          p={0}
          variant="text"
          color="#479AFB"
          rightIcon={<IoArrowForward />}
          onClick={() => window.open(href, "_blank")}
          sx={{ textTransform: "none", fontSize: "16", lineHeight: "2rem" }}>
          {children}
        </Button>
      );
    },
    link: ({ children, value }: any) => {
      const rel = !value?.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Button
          p={0}
          variant="text"
          rightIcon={<RxOpenInNewWindow />}
          onClick={() => window.open(value?.href, "_blank")}
          rel={rel}
          color="#479AFB"
          sx={{
            textTransform: "none",
            fontSize: "16",
            lineHeight: "2rem",
            display: "inline",
            verticalAlign: "baseline",
          }}>
          {children}
        </Button>
      );
    },
  },
};

export const customPostComponents = defaultComponents;

export const customProjectComponents = {
  ...defaultComponents,
  ...{
    types: {
      image: ({ value }: any) => (
        <Box my={4}>
          <Box
            width="100%"
            position="relative"
            sx={{
              aspectRatio: `${value?.asset.dimensions?.width}/${value?.asset.dimensions?.height}`,
            }}>
            <Image
              src={value?.asset.url}
              alt={value?.alt || "decorative"}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Text  textAlign="center">
            {value?.caption}
          </Text>
        </Box>
      ),
      code: ({ value }: any) => (
        <Box width={{ sm: "80%" }} mb={3}>
          <SyntaxHighlighter language={value?.language} wrapLongLines="true">
            {value?.code}
          </SyntaxHighlighter>
        </Box>
      ),
    },
    block: {
      normal: ({ children }: any) => (
        <Text
          variant="body1"
          mb={2}
          sx={{ fontSize: "1.2rem", lineHeight: "2rem" }}>
          {children}
        </Text>
      ),
      blockquote: ({ children }: any) => (
        <Box
          width={{ sm: "80%" }}
          sx={{ borderLeft: "2px solid #EDEDE7" }}
          pl={2}
          my={4}>
          <Text
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              lineHeight: "2rem",
              backgroundColor: "#E8F0F8",
              display: "inline",
            }}>
            {children}
          </Text>
        </Box>
      ),
      h1: ({ children, value }: any) => (
        <Text
          id={`${value._key}`}
          variant="h1"
          my={{ base: 2, lg: 4 }}
          py={2}
          sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}>
          {children}
        </Text>
      ),
      h2: ({ children, value }: any) => (
        <Text
          id={`${value._key}`}
          variant="h2"
          my={{ base: 2, lg: 4 }}
          fontSize={{ sm: "2rem" }}>
          {children}
        </Text>
      ),
      h3: ({ children, value }: any) => (
        <Text
          id={`${value._key}`}
          variant="h3"
          my={{ base: 2, lg: 4 }}
          fontSize={{ sm: "1.8rem" }}>
          {children}
        </Text>
      ),
      h4: ({ children, value }: any) => (
        <Text
          id={`${value._key}`}
          variant="h4"
          my={{ base: 2, lg: 4 }}
          fontSize={{ sm: "1.8rem" }}>
          {children}
        </Text>
      ),
    },
  },
};

export const customThoughtComponents = {
  ...defaultComponents,
  ...{
    block: {
      // Ex. 1: customizing common block types
      normal: ({ children }: any) => (
        <Text
          mb={2}
          sx={{ fontSize: "1.2rem", lineHeight: "2rem" }}>
          {children}
        </Text>
      ),
      blockquote: ({ children }: any) => (
        <Box
          width={{ sm: "80%" }}
          sx={{ borderLeft: "2px solid #EDEDE7" }}
          pl={2}
          my={4}>
          <Text
            as="blockquote"
            sx={{
              fontSize: "1.2rem",
              lineHeight: "2rem",
              backgroundColor: "#E8F0F8",
              display: "inline",
            }}>
            {children}
          </Text>
        </Box>
      ),
      h1: ({ children }: any) => (
        <Text variant="h1" my={4} width={{ sm: "80%" }}>
          {children}
        </Text>
      ),
      h2: ({ children }: any) => (
        <Text variant="h2" my={3} width={{ sm: "80%" }}>
          {children}
        </Text>
      ),
      h3: ({ children }: any) => (
        <Text variant="h3" my={3} width={{ sm: "80%" }}>
          {children}
        </Text>
      ),
      h4: ({ children }: any) => (
        <Text variant="h4" my={3} width={{ sm: "80%" }}>
          {children}
        </Text>
      ),
    },
  },
};