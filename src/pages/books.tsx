import { gentium } from "@/components/Index/Hero";
import { Layout } from "@/components/Layout";
import { PageProvider } from "@/components/PageProvider";
import { Flex, Text, Box, Image, Stack } from "@chakra-ui/react";
import { book } from "@/utils/fakedata";
import { BookItem } from "@/components/utils/BookItem";
import React from "react";

const Books = () => {
  const [show, setShow] = React.useState(false);

  return (
    <PageProvider title="Books">
        <Flex
          direction="column"
          w="full"
          minH="40vh"
          align="start"
          pt={40}
          pb={20}
          bg="#479AFB"
          color="white"
          px={{ base: "20px", md: "100px", xl: "280px" }}
        >
          <Text fontSize={"5xl"} fontWeight={"bold"} color="white">
            BOOKS
          </Text>
          <Text className={gentium.className} w={{ base: "full", md: "400px" }}>
            “I am pursuing a career in hardware, systems, and backend
            engineering because I believe anyone can change the world with
            better chips and even better software.”
          </Text>
        </Flex>
      <Layout>
          <Stack mt={10}>
            {book.map((item, index) => (
                <Flex direction={{ base: "column", md: "row"}} w="full" key={index} gap={10} borderBottom="1px solid #e2e2e2" pt={5} pb={7}>
                   <BookItem bkImg={item.bkImg} index={index} />
                    <Stack>
                        <Text fontSize={'1.2rem'} fontWeight={'semibold'}>
                            {item.bkTitle}
                        </Text>
                        <Text color="#747474">{item.bkAuthor}</Text>
                        <Text>
                            Read: {item.bkDateRead} • Rating: {item.bkRating}
                        </Text>
                        <Text>
                            {item.bkReview}
                        </Text>
                    </Stack>
                </Flex>
            ))}
          </Stack>
      </Layout>
    </PageProvider>
  );
};

export default Books;
