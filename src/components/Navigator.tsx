import { Flex, Button, IconButton } from "@chakra-ui/react";
import { TbFileTypePdf } from "react-icons/tb";
import { useRouter } from "next/navigation";

export const Navigator = () => {
  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "List100",
      path: "/list100",
    },
  ];
  const router = useRouter();
  return (
    <Flex
      px={5}
      justify="center"
      align="center"
      pos="fixed"
      bottom={10}
      w="full"
      zIndex={99}
    >
      <Flex
        bg="#E2E2E280"
        backdropFilter={"blur(10px)"}
        p={3}
        borderRadius="md"
        gap={5}
        overflow="auto"
        w={{ base: "full", md: "600px" }}
      >
        <IconButton
          aria-label="resume"
          icon={<TbFileTypePdf />}
          variant="ghost"
          color="#999999"
          _hover={{bg: "white"}}
        />
        {navItems.map((item, index) => (
          <Button
            variant="ghost"
            key={index}
            onClick={() => router.push(item.path)}
            color="#999999"
            fontWeight={"500"}
            w='fit-content'
          _hover={{bg: "white"}}
          >
            {item.label}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};
