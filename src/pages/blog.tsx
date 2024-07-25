import { Education } from "@/components/About/Education";
import { Exposition } from "@/components/About/Exposition";
import { Hero } from "@/components/Blog/Hero";
import { Work } from "@/components/About/Work";
import { Layout } from "@/components/Layout";
import { PageProvider } from "@/components/PageProvider";
import client from "@/utils/sanity";
import { useEffect, useState } from "react";
import BlogListItem from "@/components/utils/BlogList";
import getDateString from "@/utils/getDateString";
import { Box, Button, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function Blog() {
  const [content, setContent] = useState<any>([]);
  const [category, setCategory] = useState<any>([]);

  useEffect(() => {
    const fetchContent = async () => {
      const articles = await client.fetch(
        `*[_type == "post" && hidden != true]{_id,publishedAt,title,slug, body[]{
                ...,
                _type == 'block' => {
                ...,
                markDefs[]{
                  ...,
                  _type == "internalLink" => {
                    "info": @.reference->{_type,slug}
                  }
                }
              },
             _type == 'image' => {
                type,alt,_key,_type, asset{_ref}-> {url,"blurHash":metadata.blurHash, "dimensions":metadata.dimensions{width,height}}
              },} } | order(publishedAt desc)`
      );
      setContent(articles);
      const categories = await client.fetch(
        `*[_type == "category"]{_id, title, slug}`
      );
      setCategory(categories);
    };
    fetchContent();
  }, []);
  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the data for the current page
  const currentPageData = content?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(content?.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <PageProvider title="My Blog">
      <Hero />
      <Layout>
        <Flex
          direction={{ base: "column", xl: "row" }}
          gap={10}
          py={5}
          w="full"
          // align="start"
          justify={"space-between"}
        >
          <Stack>
            {currentPageData.map(
              ({ _id, publishedAt, title, slug, summary }: any) => (
                <BlogListItem
                  key={_id}
                  date={getDateString(publishedAt)}
                  title={title}
                  summary={summary}
                  slug={slug.current}
                />
              )
            )}
            <Flex
              justify="end"
              w="full"
              align="center"
              gap={3}
              mt={4}
              mb={2}
              px={2}
            >
              <IconButton
                icon={<IoChevronBack />}
                aria-label="previous"
                onClick={handlePrevPage}
                isDisabled={currentPage === 1}
                size="xs"
              />
              <Text fontSize={12}>
                Page {currentPage} of {totalPages}
              </Text>
              <IconButton
                icon={<IoChevronForward />}
                aria-label="next"
                onClick={handleNextPage}
                isDisabled={currentPage === totalPages}
                size="xs"
              />
            </Flex>
          </Stack>
          <Box
            p={3}
            h="fit-content"
            w={{ base: "full", lg: "500px" }}
            border="1px solid #e2e2e2"
            rounded="md"
          >
            <Text fontSize={18} fontWeight={600} mb={7}>
              Categories
            </Text>
            {category?.map((item: any) => (
              <Stack align="start" spacing={2} key={item.title}>
                <Button
                  variant="link"
                  onClick={() =>
                    window.location.assign(
                      `/blog/category/${item.slug.current}`
                    )
                  }
                  color="initial"
                  fontWeight={400}
                  mb={2}
                >
                  {item.title}
                </Button>
              </Stack>
            ))}
          </Box>
        </Flex>
      </Layout>
    </PageProvider>
  );
}
