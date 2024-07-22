
import { Education } from "@/components/About/Education";
import { Exposition } from "@/components/About/Exposition";
import { Hero } from "@/components/About/Hero";
import { Work } from "@/components/About/Work";
import { Layout } from "@/components/Layout";
import { PageProvider } from "@/components/PageProvider";
import client from "@/utils/sanity";
import { useEffect, useState } from "react";

export default function About() {
    const [content, setContent] = useState<any>([]);
    useEffect(() => {
        const fetchContent = async () => {
            const about = await client.fetch(
                `*[_type == "about"]{introduction, otherInterests, "mainImage" : mainImage{alt,caption, asset{_ref}->{url,"blurHash":metadata.blurHash,"dimensions":metadata.dimensions{width,height}}},body[]{
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
              },}}`
              );
              setContent(about)
              console.log("Content: ", about)
        }
        fetchContent()
    }, [])
    console.log(content)
  return (
    <PageProvider>
        <Hero />
      <Layout>
       <Exposition exposition={content![0]?.body!} />
      </Layout>
      <Work />
     <Education />
    </PageProvider>
  );
}

