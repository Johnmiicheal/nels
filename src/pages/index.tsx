import { About } from "@/components/Index/About";
import { Hero } from "@/components/Index/Hero";
import { Layout } from "@/components/Layout";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
