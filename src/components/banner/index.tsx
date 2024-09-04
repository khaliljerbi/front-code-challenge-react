"use client";

import content from "@/data/index.json";
import { Banner as BannerType } from "@/types/banner.type";
import { Box, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const Banner = () => {
  const banner = content.content.find((x) => x.type === "HERO") as BannerType;
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
      />
      <Box
        pos="absolute"
        height={{ base: "250px", md: "380px", xl: "560px" }}
        width={{ base: "150px", md: "280px", xl: "350px" }}
        top={{ base: "-20px", md: "-50px" }}
        left={{ base: "40px", md: "120px" }}
      >
        <Image
          style={{ objectFit: "cover" }}
          fill
          src={banner.foregroundAsset.url}
          alt={banner.foregroundAsset.alt}
        />
      </Box>
      <Stack pos="absolute" top="20px" right="40px" display="flex" justifyContent="center" height="100%">
        <Text fontSize={{ base: 20, md: 24, xl: 48 }} textAlign="right">
          {banner.title}
        </Text>
        <Text fontSize={{ base: 12, md: 16, xl: 20 }} textAlign="right">
          {banner.description}
        </Text>
      </Stack>
    </Box>
  );
};

export default Banner;
