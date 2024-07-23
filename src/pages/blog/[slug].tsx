import SinglePost from "@/components/Blog/SinglePost";
import { Layout } from "@/components/Layout";
import { PageProvider } from "@/components/PageProvider"
import getDateString from "@/utils/getDateString";
import client from "@/utils/sanity";
import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
const Post = () => {
    const router = useRouter()
    const { asPath } = router
    const [slug, setSlug] = useState<string>(asPath.split('/').filter(Boolean).pop()!)
    const [content, setContent] = useState<any[]>([]);
    const [allContent, setAllContent] = useState<any[]>([]);
    const [loading, setLoading] = useState(false)
    function getRandomElements<T>(arr: T[], count: number): T[] {
        if (arr.length <= count) {
            return arr;
        }
    
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    

    useEffect(() => {
        setSlug(asPath.split('/').filter(Boolean).pop()!)
        if(!content){
            setLoading(true)
        }
        const fetchContent = async () => {
            const articles = await client.fetch(
                `*[_type == "post" && slug.current == "${slug}" ]{_id,publishedAt,title,slug,summary, body[]{
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
              setContent(articles)
              
              const allContent = await client.fetch(
                `*[_type == "post" && hidden != true]{_id,publishedAt,title,summary,slug, body[]{
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
              setAllContent(allContent)
        }
        if (content.length < 1) {
            const intervalId = setInterval(() => {
              fetchContent();
            }, 500); // Fetch every 500 milliseconds
        
            const timeoutId = setTimeout(() => {
              clearInterval(intervalId);
            }, 4000); // Stop after 4 seconds
        
            // Clear timeout and interval on cleanup
            return () => {
              clearInterval(intervalId);
              clearTimeout(timeoutId);
            };
          }
    }, [allContent, content, slug])
    const sortContent = allContent.filter((item) => item.slug.current !== content[0]?.slug.current).sort(() => 0.5 - Math.random())
    const sliceContent = getRandomElements(sortContent, 5)

    return(
        <PageProvider title={content[0]?.title}>
                <SinglePost title={content![0]?.title!}
                publishedAt={getDateString(content![0]?.publishedAt!)}
                slug={slug}
                body={content![0]?.body!} summary={content![0]?.summary!} />
                <Layout>
                    <Stack w="full" mb={10}>
                        <Text textAlign="start" >Recommended for you</Text>
                        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
                            {sliceContent.map((item) => (
                                <Card key={item._id} w={{ base: "full", lg: "400px"}} onClick={() => window.location.assign(`/blog/${item.slug.current}`)} cursor="pointer" transition="transform 0.3s ease" _hover={{ transform: "scale(1.02)" }} >
                                <CardHeader>
                                  <Text fontWeight={'semibold'} size='sm'>{item.title}</Text>
                                </CardHeader>
                                <CardBody>
                                  <Text>{item.summary}</Text>
                                </CardBody>
                                {/* <CardFooter>
                                  <Button>View here</Button>
                                </CardFooter> */}
                              </Card>
                            ))}
                        </SimpleGrid>
                    </Stack>
                </Layout>
        </PageProvider>
    )
}

export default Post