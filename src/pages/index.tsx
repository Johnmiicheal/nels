import { About } from "@/components/Index/About";
import { Articles } from "@/components/Index/Articles";
import { Hero } from "@/components/Index/Hero";
import { Projects } from "@/components/Index/Projects";
import { Layout } from "@/components/Layout";
import { PageProvider } from "@/components/PageProvider";

export default function Home() {
  return (
    <PageProvider title="Robotics. Teaching. Quality Education.">
        <Hero />
      <Layout>
        <About />
        <Projects />
        <Articles />
      </Layout>
    </PageProvider>
  );
}
