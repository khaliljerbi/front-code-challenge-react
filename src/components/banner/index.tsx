"use client";

import { useBanner } from "@/hooks/banner";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const Banner = () => {
  const { banner } = useBanner()
  return (
    <Box
      pos="relative"
      height={{ base: "220px", md: "300px", xl: "480px" }}
      mb="80px"
      px="40px"
    >
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={banner.backgroundAsset.url}
        alt={banner.backgroundAsset.alt}
        priority
      />
      <Box
        pos="absolute"
        height={{ base: "300px", md: "380px", xl: "560px" }}
        width={{ base: "150px", md: "200px", xl: "350px" }}
        top={{ base: "-40px", md: "-40px" }}
        left={{ base: "30px", md: "80px", xl: "120px" }}
      >
        <Image
          style={{ objectFit: "cover" }}
          fill
          src={banner.foregroundAsset.url}
          alt={banner.foregroundAsset.alt}
          priority
        />
      </Box>
      <Stack pos="absolute" top={{ base: "20px", md: "40px" }} right={{ base: "25px", md: "40px" }} display="flex" justifyContent="center" height="100%">
        <Heading as="h1" fontSize={{ base: 20, md: 24, xl: 48 }} textAlign="right">
          {banner.title}
        </Heading>
        <Heading as="h2" fontSize={{ base: 14, md: 16, xl: 24 }} textAlign="right">{banner.subtitle}</Heading>
        <Text fontSize={{ base: 12, md: 16, xl: 20 }} textAlign="right">
          {banner.description}
        </Text>
      </Stack>
    </Box>
  );
};

export default Banner;
