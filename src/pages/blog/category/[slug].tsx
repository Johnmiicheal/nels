import { Flex, Text, Image, Button } from "@chakra-ui/react";

const Category = () => {
    return(
    <Flex direction="column" align="center" mt={20}>
        <Text color="red" fontSize="32" _hover={{ bg: "yellow" }}>Nelson is owing me money!!!</Text>
        <Image src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXE2b2xsdjc1b2d0eGl4MHJvcndlOHM4aXh0YjliZG00bzgwNXUyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uyWTOgNGGWfks/giphy.webp" alt="money money money" />
        <Button bg="blue" color="white" _hover={{bg: "green"}} mt={10} onClick={() => window.location.assign('/')}>Go Back to Home Page</Button>
    </Flex>
    )
}

export default Category
