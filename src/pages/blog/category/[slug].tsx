import SinglePost from "@/components/Blog/SinglePost";
import { Layout } from "@/components/Layout";
import { PageProvider } from "@/components/PageProvider"
import getDateString from "@/utils/getDateString";
import client from "@/utils/sanity";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, SimpleGrid, Stack, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
const Category = () => {
    const router = useRouter()
    const { asPath } = router
    const [slug, setSlug] = useState<string>(asPath.split('/').filter(Boolean).pop()!)
    const [content, setContent] = useState<any[]>([]);

    // useEffect(() => {
    //     setSlug(asPath.split('/').filter(Boolean).pop()!)
    //     const fetchContent = async () => {
    //         const articles = await client.fetch(
    //             `*[count((categories[]->slug.current)[@ in ["${slug}"]]) > 0 && hidden != true]{_id,publishedAt,title,slug, body[]{
    //                 ...,
    //                 _type == 'block' => {
    //                 ...,
    //                 markDefs[]{
    //                   ...,
    //                   _type == "internalLink" => {
    //                     "info": @.reference->{_type,slug}
    //                   }
    //                 }
    //               },
    //              _type == 'image' => {
    //                 type,alt,_key,_type, asset{_ref}-> {url,"blurHash":metadata.blurHash, "dimensions":metadata.dimensions{width,height}}
    //               },} } | order(publishedAt desc)[0...5]`
    //               );
    //           setContent(articles)
    //     }
    //     if (content.length < 1) {
    //        fetchContent()
    //       }
    // }, [content, slug])

    return(
        <PageProvider title={slug}>
{/*             <Stack>
                {content.map((item, index) => (
                    <Stack key={index} gap={5}>
                    <SinglePost title={item?.title!}
                    publishedAt={getDateString(item?.publishedAt!)}
                    slug={slug}
                    body={item?.body!} summary={item?.summary!}/>
                    <Divider my={4} />
                    </Stack>
                ))}
            </Stack> */}
            <Flex direction="column" align="center" mt={20}>
                <Text color="red" fontSize="32" _hover={{ bg: "yellow" }}>Nelson is owing me money!!!</Text>
                <Image src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXE2b2xsdjc1b2d0eGl4MHJvcndlOHM4aXh0YjliZG00bzgwNXUyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uyWTOgNGGWfks/giphy.webp" alt="money money money" />
                <Button bg="blue" color="white" _hover={{bg: "green"}} mt={10} onClick={() => window.location.assign('/')}>Go Back to Home Page</Button>
            </Flex>
        </PageProvider>
    )
}

export default Category
