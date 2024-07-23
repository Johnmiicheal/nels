import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Navigator } from "./Navigator";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Head from "next/head";

interface PageProviderProps {
  children: ReactNode;
  title: string
}

export const PageProvider: React.FC<PageProviderProps> = ({
  children,
  title,
}) => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      align="center"
      bg="#F9F9F9"
      minH="100vh"
      w="full"
    >
      <Head>
        <title>Nelson Elijah - {title}</title>
        <meta name="description" content="Nelson Elijah's Portfolio Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logosingle.svg" />
      </Head>
      <Header />
      {children}
      <Navigator />
      <Footer />
    </Flex>
  );
};
