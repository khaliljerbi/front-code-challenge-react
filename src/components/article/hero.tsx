"use client";

import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import Image from "next/image";
import { useArticleHero } from "@/hooks/useArticleHero";

const Hero = () => {
  
  const { hero } = useArticleHero()

  return (
    <Box>
      <Flex height="480px">
        <Box pos="relative" width={{ base: "100px", md: "350px", xl: "466px" }}>
          <Image style={{ objectFit: "cover"}} fill src={hero.sideAsset.url} alt={hero.sideAsset.alt}  />
        </Box>
        <Box
          flexGrow={1}
          pos="relative"
        >
          <Image style={{ objectFit: "cover"}} fill src={hero.backgroundAsset.url} alt={hero.backgroundAsset.alt} priority />
          <Stack
            pos="absolute"
            top="50%"
            right={{ base: "20px", md: "40px" }}
            transform="translateY(-50%)"
            maxW="459px"
            color="white"
          >
            <Text
              textAlign="right"
              fontSize={{ base: "xs", md: "sm", xl: "md" }}
            >
              {hero.subtitle}
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "xl", md: "2xl", xl: "4xl" }}
              textAlign="right"
            >
              {hero.title}
            </Heading>
          </Stack>
        </Box>
      </Flex>
      <Flex mt="80px" justifyContent="space-between">
        <Text as="i">{hero.publishingDate}</Text>
        <Text as="i">Author: {hero.author}</Text>
      </Flex>
    </Box>
  );
};

export default Hero;
