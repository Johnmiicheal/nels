import { Layout } from "@/components/Layout";
import { PageProvider } from "@/components/PageProvider"
import ProjectBody from "@/components/Projects/ProjectBody";
import { ProjectFooter } from "@/components/Projects/ProjectFooter";
import ProjectHeader from "@/components/Projects/ProjectHeader";
import client from "@/utils/sanity";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const ProjectItem = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [next, setNext] = useState<any[]>([]);
    const [back, setBack] = useState<any[]>([]);

    const router = useRouter()
    const { asPath } = router
    const [slug, setSlug] = useState<string>(asPath.split('/').filter(Boolean).pop()!)

    useEffect(() => {
      setSlug(asPath.split('/').filter(Boolean).pop()!)
      const fetchProjects = async () => {
        const project = await client.fetch(`*[_type == "project" && slug.current == "${slug}" ]{_id,title,publishedAt,doi,summary,contributors,skills,links,references,acknowledgements,
             "mainImage" : mainImage{alt,caption, asset{_ref}->{url,"blurHash":metadata.blurHash}},
            "headings": body[length(style) == 2 && string::startsWith(style, "h")]{_key,children,style},
            body[]{
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
                  },
        }}`);
        setProjects(project);

        const previousProject = await client.fetch(
            `*[_type == "project" && publishedAt < "${project[0]?.publishedAt}"]{title,"slug": slug.current} | order(publishedAt desc)[0]`
          );
          const nextProject = await client.fetch(
            `*[_type == "project" && publishedAt > "${project[0]?.publishedAt}"]{title, "slug": slug.current} | order(publishedAt asc)[0]`
          );
          setNext(nextProject);
          setBack(previousProject)
      };
      if (projects.length < 1) {
        const intervalId = setInterval(() => {
          fetchProjects();
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
    }, [projects, slug]);
    return(
        <PageProvider title={projects[0]?.title}>
            <Layout>
                <ProjectHeader
            title={projects[0]?.title}
            summary={projects[0]?.summary}
            publishedAt={projects[0]?.publishedAt}
            links={projects[0]?.links}
            contributors={projects[0]?.contributors}
            skills={projects[0]?.skills}
            mainImage={projects[0]?.mainImage}
            />
            <ProjectBody body={projects[0]?.body} headings={projects[0]?.headings} />
            <ProjectFooter
            acknowledgements={projects[0]?.acknowledgements}
            references={projects[0]?.references}
            previousProject={back}
            nextProject={next}
            />
            </Layout>
        </PageProvider>
    )
}

export default ProjectItem;