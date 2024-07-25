import { gentium } from "@/components/Index/Hero";
import { Layout } from "@/components/Layout";
import { PageProvider } from "@/components/PageProvider";
import { lists } from "@/utils/fakedata";
import { Flex, Text, Image, Button, Link, OrderedList, ListItem, Icon, List } from "@chakra-ui/react";
import { IoHourglassOutline } from "react-icons/io5";
import { TbCheck } from "react-icons/tb";

const Lists = () => {
    return(
   <PageProvider title="100 Lists">
    <Flex
      direction="column"
      w="full"
      minH="40vh"
      align="start"
      pt={40}
      pb={20}
      mb={10}
      mt={-10}
      bg="#479AFB"
      color="white"
      px={{ base: "20px", md: "100px", xl: "280px" }}
    >
      <Text fontSize={"5xl"} fontWeight={"bold"} color="white">
        LIST 100
      </Text>
      <Text
        className={gentium.className}
        w={{ base: "full", md: "400px" }}
      >
        “Lists of things I want to accomplish. If you have any suggestions, feel free to email me at <Link color="blue" href="mailto:nelsonelijah@gmail.com?subject=List100 Suggestions">nelsonelijah@gmail.com</Link>”
      </Text>
    </Flex>
    <Layout>
        <List>
            {lists.map((item, index) => (
                <ListItem key={index}>
                 <Icon as={item.isCompleted === true ? TbCheck : IoHourglassOutline} />  {item.task}
                </ListItem>
            ))}
        </List>
    </Layout>
   </PageProvider>
    )
}

export default Lists
