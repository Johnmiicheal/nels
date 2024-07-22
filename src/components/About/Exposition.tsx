import client from "@/utils/sanity";
import { Flex, Image, Stack, Text } from "@chakra-ui/react"
import { PortableText } from "@portabletext/react";


export const Exposition = ({exposition} : {exposition: []}) => {
    return(
        <Flex align="start" direction={{ base: "column", lg: "row"}} justify={"space-between"} w="full" mt={40} gap={10}>
            <Image src="/images/teach.png" rounded="md" alt="nelson elijah image" w={{ md: "400px"}} h="300px" objectFit={"cover"} />
            <Stack fontSize={13} spacing="1" textAlign={"justify"}>
                <PortableText value={exposition} />
            </Stack>
        </Flex>
    )
}

