"use client";

import { Box, Text } from "@chakra-ui/react";
import content from "@/data/index.json";

const Footer = () => {
  const footer = content.footer;
  return (
    <Box
      backgroundImage={footer.background}
      backgroundPosition="center"
      backgroundSize="cover"
      height={{ base: "250px", md: "300px", xl: "400px"  }}
      display="grid"
      alignItems="center"
    >
      <Text textAlign="center" color="white">
        {footer.text}
      </Text>
    </Box>
  );
};

export default Footer;
