// components/Marquee.tsx
import React from "react";
import { Box, Flex, keyframes } from "@chakra-ui/react";

const marqueeLeftToRight = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
`;

const marqueeRightToLeft = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
`;

interface MarqueeProps {
  children: React.ReactNode;
  speed?: string;
  direction?: "left" | "right";
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = "20s",
  direction = "right",
}) => {
  const animationKeyframes =
    direction === "left" ? marqueeLeftToRight : marqueeRightToLeft;

  return (
    <Flex
      overflow="hidden"
      whiteSpace="nowrap"
      width="100%"
      position="relative"
    >
      <Box
        display="flex"
        css={{
          animation: `${animationKeyframes} ${speed} linear infinite`,
        }}
        whiteSpace="nowrap"
      >
          {children}
      </Box>
    </Flex>
  );
};

export default Marquee;
