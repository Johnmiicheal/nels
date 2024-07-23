
import { Education } from "@/components/About/Education";
import { Exposition } from "@/components/About/Exposition";
import { Hero } from "@/components/About/Hero";
import { Work } from "@/components/About/Work";
import { Layout } from "@/components/Layout";
import { PageProvider } from "@/components/PageProvider";
import client from "@/utils/sanity";
import { useEffect, useState } from "react";

export default function Projects() {
    const [content, setContent] = useState<any>([]);
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
              },} } | order(publishedAt desc)[0...5]`
              );
              setContent(articles)
              console.log("Content: ", articles)
        }
        fetchContent()
    }, [])
    console.log(content)
  return (
    <PageProvider title="My Projects">
        <Hero />
      <Layout>
       <Exposition exposition={content![0]?.body!} />
      </Layout>
      <Work />
     <Education />
    </PageProvider>
  );
}

