import Link from "next/link";
import { Text, Stack, } from "@chakra-ui/react"

interface BlogListProps{
    date: string;
    title: string;
    summary: string;
    slug: string;
}

const BlogListItem: React.FC<BlogListProps> = ({ date, title, summary, slug }) => {
  return (
    <Stack py={2} mb={2} align="start" w="full" _hover={{ bg: "#efefef"}} px={2} rounded="sm">
      <Link href={`/blog/${slug}`}>
        <Text mb={1} fontSize="18" fontWeight="semibold">
          {title}
        </Text>
        <Text color="#747474" w={{ base: "full", md: "550px"}}>{summary}</Text>
        <Text fontSize="0.7rem">
          {date}
        </Text>
      </Link>
    </Stack>
  );
};

export default BlogListItem;