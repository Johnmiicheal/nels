import SinglePost from "@/components/Blog/SinglePost";
import { Layout } from "@/components/Layout";
import { PageProvider } from "@/components/PageProvider"
import getDateString from "@/utils/getDateString";
import client from "@/utils/sanity";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
const Category = () => {
    const router = useRouter()
    const { asPath } = router
    const [slug, setSlug] = useState<string>(asPath.split('/').filter(Boolean).pop()!)
    const [content, setContent] = useState<any[]>([]);

    useEffect(() => {
        setSlug(asPath.split('/').filter(Boolean).pop()!)
        const fetchContent = async () => {
            const articles = await client.fetch(
                `*[count((categories[]->slug.current)[@ in ["${slug}"]]) > 0 && hidden != true]{_id,publishedAt,title,slug, body[]{
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
                  },} } | order(publishedAt desc)[0...5]`
                  );
              setContent(articles)
        }
        if (content.length < 1) {
           fetchContent()
          }
    }, [content, slug])

    return(
        <PageProvider title={slug}>
            <Stack>
                {content.map((item, index) => (
                    <Stack key={index} gap={5}>
                    <SinglePost title={item?.title!}
                    publishedAt={getDateString(item?.publishedAt!)}
                    slug={slug}
                    body={item?.body!} summary={item?.summary!}/>
                    <Divider my={4} />
                    </Stack>
                ))}
            </Stack>
        </PageProvider>
    )
}

export default Category