"use client";

import content from "@/data/index.json";
import { Banner as BannerType } from "@/types/banner.type";
import { SECTION_TYPE } from "@/types/enums/section-type.enum";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const Banner = () => {
  const banner = content.content.find((x) => x.type === SECTION_TYPE.HERO) as BannerType;
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
        height={{ base: "250px", md: "380px", xl: "560px" }}
        width={{ base: "120px", md: "200px", xl: "350px" }}
        top={{ base: "-20px", md: "-50px" }}
        left={{ base: "40px", md: "120px" }}
      >
        <Image
          style={{ objectFit: "cover" }}
          fill
          src={banner.foregroundAsset.url}
          alt={banner.foregroundAsset.alt}
          priority
        />
      </Box>
      <Stack pos="absolute" right={{ base: "25px", md: "40px" }} display="flex" justifyContent="center" height="100%">
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
