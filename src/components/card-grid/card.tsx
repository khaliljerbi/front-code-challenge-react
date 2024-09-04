"use client";

import { CardItem } from "@/types/card.type";
import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Img, Stack, Text } from "@chakra-ui/react";

interface ICardProps extends CardItem {}

const Card = ({
  title,
  subtitle,
  description,
  backgroundAsset: { url, alt },
  cta
}: ICardProps) => {
  return (
    <Box pos="relative" height="100%" role="group">
      <Img
        boxSize="full"
        src={url}
        alt={alt}
        backgroundPosition="center"
        objectFit="cover"
      />
      <Stack
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        spacing={{ base: 6, md: 6, xl: 12 }}
      >
        <Box>
          <Text
            fontSize={20}
            fontWeight={400}
            color="black.500"
            textAlign="center"
          >
            {title}
          </Text>
          <Text
            fontSize={24}
            fontWeight={600}
            color="black.500"
            textAlign="center"
          >
            {subtitle}
          </Text>
        </Box>
       {cta &&  <Box
          display="none"
          _groupHover={{ display: "block" }}
          transition=".3s ease"
        >
          <Flex
            gap={{ base: 6, md: 6, xl: 12 }}
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            data-testid="card-description"
          >
            <Text textAlign="center" noOfLines={{ base: 3, md: 4, xl: 6 }}>
              {description}
            </Text>
            <Link
              href={cta.url}
              w={"full"}
              color="black.500"
              bg="secondary.500"
              border="1px solid #171717"
              p={4}
              _hover={{ textDecoration: "none", bg: "red.500", color: "white", border: 'none' }}
              textAlign="center"
              target={cta.target}
              aria-label={cta.ariaLabel}
            >
              {cta.text}
            </Link>
          </Flex>
        </Box>}
      </Stack>
    </Box>
  );
};

export default Card;
