import { book } from "@/utils/fakedata"
import { Box, Flex, Image } from "@chakra-ui/react"
import React, { useState } from "react";

interface BookItemProps{
    bkImg: string;
    index: number
}

export const BookItem: React.FC<BookItemProps> = ({bkImg, index}) => {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    return(
        <Box
        p={4}
        cursor="pointer"
        onMouseEnter={() => setHoverIndex(index)}
        onMouseLeave={() => setHoverIndex(null)}
        w={{ md: "500px" }}
      >
        <Flex direction="column" w="full" align="center" position="relative">
          <Box
            position="absolute"
            w="90%"
            h={{ md: "97%"}}
            top="2%"
            left="12px"
            border="1px solid grey"
            borderRadius="2px 6px 6px 2px"
            bg="white"
            boxShadow="10px 40px 40px -10px #00000030, inset -2px 0 0 grey, inset -3px 0 0 #dbdbdb, inset -4px 0 0 white, inset -5px 0 0 #dbdbdb, inset -6px 0 0 white, inset -7px 0 0 #dbdbdb, inset -8px 0 0 white, inset -9px 0 0 #dbdbdb"
          />
          <Box
            position="relative"
            borderRadius="2px 6px 6px 2px"
            boxShadow="6px 6px 18px -2px rgba(0, 0, 0, 0.2), 24px 28px 40px -6px rgba(0, 0, 0, 0.1)"
            transition="all 0.3s ease-in-out"
            transform={`perspective(2000px) rotateY(${
              hoverIndex === index ? 0 : -15
            }deg) translateX(${hoverIndex === index ? 0 : -10}px) scaleX(${
              hoverIndex === index ? 1 : 0.94
            })`}
            _hover={{
              transform:
                "perspective(2000px) rotateY(0deg) translateX(0px) scaleX(1)",
              boxShadow:
                "6px 6px 12px -1px rgba(0, 0, 0, 0.1), 20px 14px 16px -6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              src={bkImg}
              alt={`Book ${index + 1}`}
              w={{ md: "505px"}}
              h={{ md: "full"}}
              borderRadius="2px 6px 6px 2px"
            />
            <Box
              position="absolute"
              w="20px"
              h="100%"
              ml="16px"
              top="0"
              borderLeft="2px solid #00000010"
              bgGradient="linear(to-r, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)"
              transition="all 0.5s ease"
              zIndex="5"
              _hover={{ ml: "20px" }}
            />
            <Box
              position="absolute"
              w="90%"
              h="100%"
              borderRadius="3px"
              bgGradient="linear(to-r, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%)"
              top="0"
              right="0"
              opacity="0.1"
              transition="all 0.5s ease"
              zIndex="4"
            />
          </Box>
        </Flex>
      </Box>
    )
}