"use client";

import Hero from "@/components/article/hero";
import CaptionCarousel from "@/components/carousel";
import { Container, Heading, Stack } from "@chakra-ui/react";

import DOMPurify from "isomorphic-dompurify";

import article from "@/data/article.json";
import Paragraph from "@/components/article/paragraph";

const page = () => {
  const highlitedParagph = article.content.find(
    (item) => item.type === "PARAGRAPH" && item.highlight
  );
  const regularParagraph = article.content.find(
    (item) => item.type === "PARAGRAPH" && !item.highlight
  );
  return (
    <Stack gap="80px">
      <Hero />
      <Paragraph highlight text={highlitedParagph?.text as string} />
      <Paragraph text={regularParagraph?.text as string} />
      <CaptionCarousel />
      <Paragraph text={regularParagraph?.text as string} />
    </Stack>
  );
};

export default page;
