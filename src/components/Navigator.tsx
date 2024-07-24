import { Flex, Button, IconButton, Stack, Text, Icon, useMediaQuery } from "@chakra-ui/react";
import {
  TbChecklist,
  TbFileText,
  TbFileTypePdf,
  TbHome,
  TbLayoutGrid,
  TbUser,
} from "react-icons/tb";
import { useRouter } from "next/router";

export const Navigator = () => {
  const [mobile] = useMediaQuery("(max-width: 500px)");

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
      display={mobile ? 'none' : 'flex'}
    >
      <Flex
        bg="#000a1690"
        backdropFilter={"blur(10px)"}
        p={3}
        borderRadius="md"
        gap={5}
        overflow="auto"
        w={{ base: "full", md: "600px" }}
        justify="space-between"
      >
        <IconButton
          aria-label="resume"
          icon={<TbFileTypePdf />}
          variant="ghost"
          color="#999999"
          _hover={{ bg: "white" }}
        />
        {navItems.map((item, index) => (
          <Button
            // variant="ghost"
            key={index}
            onClick={() => router.push(item.path)}
            color={router.pathname === item.path ? "#479AFB" : "#999"}
            bg={router.pathname === item.path ? "#FFF" : "transparent"}
            fontWeight={"500"}
            w="fit-content"
            _hover={{ bg: "white" }}
          >
            {item.label}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export const MobileNavigator = () => {
  const router = useRouter();
  const navItems = [
    {
      label: "Home",
      path: "/",
      icon: TbHome,
    },
    {
      label: "About",
      path: "/about",
      icon: TbUser,
    },
    {
      label: "Blog",
      path: "/blog",
      icon: TbFileText,
    },
    {
      label: "Projects",
      path: "/projects",
      icon: TbLayoutGrid,
    },
    {
      label: "List100",
      path: "/list100",
      icon: TbChecklist,
    },
  ];
  const [mobile] = useMediaQuery("(max-width: 500px)");

  return (
    <Flex
      px={5}
      justify="center"
      align="center"
      pos="fixed"
      bottom={10}
      w="full"
      zIndex={99}
      display={mobile ? 'flex' : 'none'}

    >
      <Flex
        bg="#000a1690"
        backdropFilter={"blur(10px)"}
        p={3}
        borderRadius="md"
        gap={5}
        overflow="auto"
        w={{ base: "full", md: "600px" }}
        justify="space-between"
      >
        {navItems.map((item, index) => (
          <Stack
            align="center"
            key={index}
            color={router.pathname === item.path ? "#479AFB" : "#999"}
            bg={router.pathname === item.path ? "#FFF" : "transparent"}
            onClick={() => router.push(item.path)}
            rounded="md"
            py={1}
            px={3}
            spacing={1}
          >
            <Icon
              as={item.icon}
            />
            <Text fontSize={10}>{item.label}</Text>
          </Stack>
        ))}
      </Flex>
    </Flex>
  );
};
